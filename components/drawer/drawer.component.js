import * as React from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";
import { PoseGroup } from "react-pose";
import { values } from "ramda";

import { DRAWER_POSITIONS, DRAWER_STATES } from "../../constants/ui";
import {
  DrawerContent,
  DrawerPoser,
  DrawerClosePoser,
  DrawerFooter,
  DrawerCloseWrapper,
  DRAWER_THEMES,
  DrawerGlobalStyle
} from "./drawer.style";
import { isOpen, isLeft } from "./drawer.utils";
import { breakpoints } from "../../theme/breakpoints";
import { CloseDrawerButton } from "../icon-button/close-drawer-button";
import { ActivityOverlay } from "../../modules/activity-overlay";
import ReactFocusLock from "react-focus-lock";

const isNotClosedState = display => display !== DRAWER_STATES.CLOSED;

export const Drawer = ({
  display,
  displayAboveNavigation = false,
  hideDrawer,
  position,
  content,
  drawerTheme = DRAWER_THEMES.LIGHT,
  isExpansionAnimationComplete,
  setExpandedState,
  isModalDisplayed
}) => {
  const isNotClosed = isNotClosedState(display);
  return (
    <ReactFocusLock
      group="drawer"
      disabled={display === DRAWER_STATES.CLOSED || isModalDisplayed}
      autoFocus={false}
    >
      <MediaQuery maxWidth={breakpoints.medium}>
        {isCompactView => (
          <DrawerPoser
            isFullWidth={isCompactView}
            displayAboveNavigation={displayAboveNavigation}
            pose={display}
            poseKey={isCompactView}
            position={position}
            drawerTheme={drawerTheme}
            isExpanded={isExpansionAnimationComplete}
            onPoseComplete={() => {
              setExpandedState(isNotClosed);
            }}
          >
            {isNotClosed && (
              <React.Fragment>
                {(displayAboveNavigation || isCompactView) && (
                  <DrawerCloseWrapper position={position}>
                    <DrawerClose
                      position={position}
                      hideDrawer={hideDrawer}
                      drawerTheme={drawerTheme}
                    />
                  </DrawerCloseWrapper>
                )}

                <DrawerContent
                  isFullWidth={isOpen(display) || isCompactView}
                  position={position}
                >
                  {content}

                  {isLeft(position) && (
                    <DrawerFooter>
                      <div>
                        <a
                          href="https://www.facebook.com/wearehims"
                          target="_blank"
                          aria-label="Facebook"
                          rel="noopener noreferrer"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 155 155"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="#000"
                              d="M89.584,155.139V84.378h23.742l3.562-27.585H89.584V39.184 c0-7.984,2.208-13.425,13.67-13.425l14.595-0.006V1.08C115.325,0.752,106.661,0,96.577,0C75.52,0,61.104,12.853,61.104,36.452 v20.341H37.29v27.585h23.814v70.761H89.584z"
                            />
                          </svg>
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://twitter.com/wearehims"
                          target="_blank"
                          aria-label="Twitter"
                          rel="noopener noreferrer"
                        >
                          <svg
                            width="21.12"
                            height="24"
                            viewBox="0 0 22 25"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.644 5.709c.8475-.5346 1.4979-1.3824 1.803-2.3922-.7935.4963-1.6704.8552-2.606 1.0494C18.0944 3.5247 17.0273 3 15.8463 3c-2.2656 0-4.1016 1.9368-4.1016 4.3252 0 .3391.034.6695.1045.9851-3.4091-.1807-6.432-1.9009-8.457-4.5195-.3533.641-.5552 1.3836-.5552 2.1756 0 1.4999.7243 2.824 1.8254 3.6012-.6726-.0222-1.3054-.219-1.8594-.5408v.0533c0 2.0964 1.4134 3.845 3.2928 4.241-.3451.1015-.7067.1522-1.0824.1522-.264 0-.5224-.026-.7712-.0767.5212 1.7177 2.0367 2.9701 3.8328 3.0035-1.4052 1.1609-3.1743 1.8514-5.096 1.8514-.331 0-.6585-.0186-.979-.0594 1.816 1.2264 3.9725 1.943 6.2898 1.943 7.5483 0 11.6735-6.5912 11.6735-12.3074 0-.1881-.0024-.375-.0106-.5594.8018-.6101 1.499-1.3724 2.0473-2.24a7.8668 7.8668 0 0 1-2.356.6807z"
                              fill="rgba(0, 0, 0, .88)"
                            />
                          </svg>
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://instagram.com/hims"
                          target="_blank"
                          aria-label="Instagram"
                          rel="noopener noreferrer"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 504 504"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M251.921,0.159 C183.503,0.159 174.924,0.449 148.054,1.675 C121.24,2.898 102.927,7.157 86.903,13.385 C70.337,19.822 56.288,28.436 42.282,42.441 C28.277,56.447 19.663,70.496 13.226,87.062 C6.998,103.086 2.739,121.399 1.516,148.213 C0.29,175.083 0,183.662 0,252.08 C0,320.497 0.29,329.076 1.516,355.946 C2.739,382.76 6.998,401.073 13.226,417.097 C19.663,433.663 28.277,447.712 42.282,461.718 C56.288,475.723 70.337,484.337 86.903,490.775 C102.927,497.002 121.24,501.261 148.054,502.484 C174.924,503.71 183.503,504 251.921,504 C320.338,504 328.917,503.71 355.787,502.484 C382.601,501.261 400.914,497.002 416.938,490.775 C433.504,484.337 447.553,475.723 461.559,461.718 C475.564,447.712 484.178,433.663 490.616,417.097 C496.843,401.073 501.102,382.76 502.325,355.946 C503.551,329.076 503.841,320.497 503.841,252.08 C503.841,183.662 503.551,175.083 502.325,148.213 C501.102,121.399 496.843,103.086 490.616,87.062 C484.178,70.496 475.564,56.447 461.559,42.441 C447.553,28.436 433.504,19.822 416.938,13.385 C400.914,7.157 382.601,2.898 355.787,1.675 C328.917,0.449 320.338,0.159 251.921,0.159 Z M251.921,45.55 C319.186,45.55 327.154,45.807 353.718,47.019 C378.28,48.139 391.619,52.243 400.496,55.693 C412.255,60.263 420.647,65.722 429.462,74.538 C438.278,83.353 443.737,91.745 448.307,103.504 C451.757,112.381 455.861,125.72 456.981,150.282 C458.193,176.846 458.45,184.814 458.45,252.08 C458.45,319.345 458.193,327.313 456.981,353.877 C455.861,378.439 451.757,391.778 448.307,400.655 C443.737,412.414 438.278,420.806 429.462,429.621 C420.647,438.437 412.255,443.896 400.496,448.466 C391.619,451.916 378.28,456.02 353.718,457.14 C327.158,458.352 319.191,458.609 251.921,458.609 C184.65,458.609 176.684,458.352 150.123,457.14 C125.561,456.02 112.222,451.916 103.345,448.466 C91.586,443.896 83.194,438.437 74.379,429.621 C65.564,420.806 60.104,412.414 55.534,400.655 C52.084,391.778 47.98,378.439 46.86,353.877 C45.648,327.313 45.391,319.345 45.391,252.08 C45.391,184.814 45.648,176.846 46.86,150.282 C47.98,125.72 52.084,112.381 55.534,103.504 C60.104,91.745 65.563,83.353 74.379,74.538 C83.194,65.722 91.586,60.263 103.345,55.693 C112.222,52.243 125.561,48.139 150.123,47.019 C176.687,45.807 184.655,45.55 251.921,45.55 Z"
                              id="Fill-1"
                              fill="rgba(0, 0, 0, .88)"
                              mask="url(#mask-2)"
                            />
                            <path
                              d="M251.921,336.053 C205.543,336.053 167.947,298.457 167.947,252.08 C167.947,205.702 205.543,168.106 251.921,168.106 C298.298,168.106 335.894,205.702 335.894,252.08 C335.894,298.457 298.298,336.053 251.921,336.053 Z M251.921,122.715 C180.474,122.715 122.556,180.633 122.556,252.08 C122.556,323.526 180.474,381.444 251.921,381.444 C323.367,381.444 381.285,323.526 381.285,252.08 C381.285,180.633 323.367,122.715 251.921,122.715 Z"
                              id="Fill-4"
                              fill="rgba(0, 0, 0, .88)"
                            />
                            <path
                              d="M416.627,117.604 C416.627,134.3 403.092,147.834 386.396,147.834 C369.701,147.834 356.166,134.3 356.166,117.604 C356.166,100.908 369.701,87.373 386.396,87.373 C403.092,87.373 416.627,100.908 416.627,117.604"
                              id="Fill-5"
                              fill="rgba(0, 0, 0, .88)"
                            />
                          </svg>
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://medium.com/hims-hers"
                          target="_blank"
                          aria-label="Medium"
                          rel="noopener noreferrer"
                          className="elementsstyle__ButtonReset-sc-3xjlmv-0 icon-buttonstyle__CircleButton-sc-1s9704f-0 gZrudN"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="rgba(0, 0, 0, .88)"
                              d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"
                            />
                          </svg>
                        </a>
                      </div>
                    </DrawerFooter>
                  )}

                  <ActivityOverlay />
                </DrawerContent>
                <DrawerGlobalStyle
                  isFullWidth={isCompactView}
                  isExpanded={isExpansionAnimationComplete}
                />
              </React.Fragment>
            )}
          </DrawerPoser>
        )}
      </MediaQuery>
    </ReactFocusLock>
  );
};

Drawer.propTypes = {
  display: PropTypes.oneOf([
    DRAWER_STATES.CLOSED,
    DRAWER_STATES.HALF,
    DRAWER_STATES.FULL
  ]),
  displayAboveNavigation: PropTypes.bool,
  hideDrawer: PropTypes.func.isRequired,
  position: PropTypes.oneOf([DRAWER_POSITIONS.LEFT, DRAWER_POSITIONS.RIGHT]),
  contentId: PropTypes.string,
  content: PropTypes.element,
  showDrawer: PropTypes.func.isRequired,
  drawerTheme: PropTypes.oneOf(values(DRAWER_THEMES)),
  isExpansionAnimationComplete: PropTypes.bool,
  setExpandedState: PropTypes.func.isRequired,
  isModalDisplayed: PropTypes.bool
};

export const DrawerClose = ({ position, hideDrawer, drawerTheme }) => (
  <PoseGroup animateOnMount>
    <DrawerClosePoser key={`drawer-close-${position}`} position={position}>
      <CloseDrawerButton
        drawer={position}
        onClick={hideDrawer}
        drawerTheme={drawerTheme}
      />
    </DrawerClosePoser>
  </PoseGroup>
);

DrawerClose.propTypes = {
  position: PropTypes.oneOf([DRAWER_POSITIONS.LEFT, DRAWER_POSITIONS.RIGHT]),
  hideDrawer: PropTypes.func.isRequired,
  drawerTheme: PropTypes.oneOf(values(DRAWER_THEMES))
};
