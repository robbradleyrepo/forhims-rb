/**
 * utils/dom.js
 * Utility functions for manipulating and working with the DOM in some way
 */

import { useRef, useState, useEffect, useCallback, useMemo } from "react";

import { useSpring } from "react-spring";

import { isClient } from "./";

// Polyfill for ResizeObserver (will progressively load)
// todo: dynamically polyfill in the webpack build
import ResizeObserver from "resize-observer-polyfill";

/**
 * Measures the size of a DOM element using a resize observer.
 * The hook will re-render every time the size of the measured element changes.
 *
 * This is useful if you need to measure an element that
 * may change in size later as images lazy load etc.
 *
 * Should disconnect the resize observer on unmount.
 *
 * @author Max Barry <mbarry@forhims.com>
 *
 */
export function useMeasure() {
  const ref = useRef(null);
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect))
  );
  useEffect(
    () => {
      if (!ref.current) return;
      ro.observe(ref.current);
      return () => {
        try {
          ro.disconnect();
        } catch (error) {}
      };
    },
    [ro]
  );
  return [{ ref }, bounds];
}

export function useSmoothScroll() {
  // Get the requestAnimationFrame w. lame fallback
  const raf = useMemo(
    () => (isClient() && window.requestAnimationFrame) || (cb => cb()),
    []
  );

  // Create a spring to animate the Y value
  const [, setY, stopAutoScroll] = useSpring(() => ({ y: 0 }));

  // Create a callback to fire when we want to stop the scroll
  const onAutoScrollInterrupt = useCallback(() => stopAutoScroll(), [
    stopAutoScroll
  ]);

  // Create a callback that will smoothly scroll the window a given distance
  const scroll = useCallback(
    distance => {
      // What is the current window.scrollY (fallback to document scrollTop for x-browser)
      const { scrollY = document.documentElement.scrollTop } = window;

      // Add a function on the wheel that allows the user to interrupt the autoscroll
      window.addEventListener("wheel", onAutoScrollInterrupt);
      // Also a touchstart event if a mobile user touches to interrupt
      window.addEventListener("touchstart", onAutoScrollInterrupt);

      // Pause a frame
      raf(() => {
        // Update the Y value
        setY({
          y: scrollY + distance,
          reset: true,
          from: { y: scrollY },
          // When the animation is complete remove the event listener
          onRest: () => {
            window.removeEventListener("wheel", onAutoScrollInterrupt);
            window.removeEventListener("touchstart", onAutoScrollInterrupt);
          },
          // Each new generated value you want to scroll the window by that value
          onFrame: animation => window.scroll(0, animation.y)
        });
      });
    },
    [onAutoScrollInterrupt, raf, setY]
  );

  return scroll;
}
