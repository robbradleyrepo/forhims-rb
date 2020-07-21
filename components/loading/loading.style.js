import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const sweep = keyframes`
  0% {
    clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 50% 50%, 0% 0%, 0% 0%, 0% 0%);
  }
  50% {
    clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 50% 50%, 100% 0%, 100% 0%, 0% 0%);
  }
  100% {
    clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 50% 50%, 100% 100%, 100% 0%, 0% 0%);
  }
`;

export const LoadingDiv = styled.div`
  animation: ${sweep} ${({ theme }) => theme.transitions.speed.xxslow} linear
      alternate infinite,
    ${rotate} ${({ theme }) => theme.transitions.speed.xxslow} linear infinite;
  border-color: ${({ color }) => color};
  border-radius: 50%;
  border-style: solid;
  border-width: calc(${({ size }) => size} / 10);
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`;
