import styled from "styled-components";

export const ActivityOverlayContainer = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 100;
`;

ActivityOverlayContainer.displayName = "ActivityOverlayContainer";
