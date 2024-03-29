import { createGlobalStyle } from "styled-components";

export const ToastrStyle = createGlobalStyle`
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

.animated.bounceIn {
  animation-duration: 0.7s;
}

.animated.bounceOut {
  animation-duration: 0.5s;
}

.animated.bounceIn {
  animation-name: bounceIn;
}

.animated.bounceOut {
  animation-name: bounceOut;
}

.animated.fadeIn {
  animation-name: fadeIn;
  animation-duration: 0.7s;
}

.animated.fadeOut {
  animation-name: fadeOut;
  animation-duration: 0.3s;
}

.animated.bounceInDown {
  animation-name: bounceInDown;
}

.animated.bounceOutUp {
  animation-name: bounceOutUp;
}

@keyframes bounceIn {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: perspective(1px) scale3d(0.3, 0.3, 0.3);
  }
  20% {
    transform: perspective(1px) scale3d(1.1, 1.1, 1.1);
  }
  40% {
    transform: perspective(1px) scale3d(0.9, 0.9, 0.9);
  }
  60% {
    opacity: 1;
    transform: perspective(1px) scale3d(1.03, 1.03, 1.03);
  }
  80% {
    transform: perspective(1px) scale3d(0.97, 0.97, 0.97);
  }
  to {
    opacity: 1;
    transform: perspective(1px) scale3d(1, 1, 1);
  }
}

@keyframes bounceOut {
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }
  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }
  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  to {
    transform: none;
  }
}

@keyframes bounceOutUp {
  20% {
    transform: translate3d(0, -10px, 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}

.rrt-confirm-holder {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999999;
}

.rrt-confirm-holder .shadow {
  width: 100%;
  height: 100%;
  background-color: rgba(50, 58, 68, 0.8);
}

.rrt-confirm-holder .rrt-confirm {
  width: 320px;
  background-color: white;
  position: absolute;
  z-index: 9;
  top: 20%;
  left: 50%;
  margin-left: -160px;
  box-shadow: ${({ theme }) => theme.boxShadows.large};
  border-radius: 4px;
  overflow: hidden;
}

.rrt-confirm-holder .rrt-confirm .rrt-message {
  width: 100%;
  padding: 5%;
  min-height: 50px;
  font-size: 1em;
  background-color: white;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  clear: both;
}

.rrt-confirm-holder .rrt-confirm .rrt-buttons-holder {
  display: -ms-flexbox;
  display: flex;
}

.rrt-confirm-holder .rrt-confirm .rrt-buttons-holder .rrt-button {
  -ms-flex-positive: 1;
  flex-grow: 1;
  height: 50px;
  text-transform: capitalize;
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  float: left;
  border-top: 1px solid #f0f0f0;
  font-size: 14px;
  overflow: hidden;
  cursor: pointer;
}

.rrt-confirm-holder .rrt-confirm .rrt-buttons-holder .rrt-button:hover {
  background-color: #f5f5f5;
}

.rrt-confirm-holder
  .rrt-confirm
  .rrt-buttons-holder
  .rrt-button.rrt-ok-btn:active {
  background-color: #60bb71;
  color: ${({ theme }) => theme.colors.text.primary};
}

.rrt-confirm-holder
  .rrt-confirm
  .rrt-buttons-holder
  .rrt-button.rrt-cancel-btn:active {
  background-color: #db6a64;
  color: ${({ theme }) => theme.colors.text.primary};
}

.rrt-confirm-holder .rrt-confirm .rrt-buttons-holder .rrt-button:focus {
  outline: none;
}

body.toastr-confirm-active {
  overflow: hidden;
}

.redux-toastr *,
.redux-toastr *:before,
.redux-toastr *:after {
  box-sizing: border-box;
}

.redux-toastr .top-left,
.redux-toastr .top-right,
.redux-toastr .top-center,
.redux-toastr .bottom-left,
.redux-toastr .bottom-right,
.redux-toastr .bottom-center {
  width: 350px;
  position: fixed;
  z-index: 99999999;
  padding: 0 10px;
}

.redux-toastr .top-left,
.redux-toastr .top-right,
.redux-toastr .top-center {
  top: 0;
}

.redux-toastr .top-right,
.redux-toastr .bottom-right {
  right: 0;
}

.redux-toastr .bottom-left,
.redux-toastr .bottom-right,
.redux-toastr .bottom-center {
  bottom: 0;
}

.redux-toastr .top-left,
.redux-toastr .bottom-left {
  left: 0;
}

.redux-toastr .top-center,
.redux-toastr .bottom-center {
  left: 50%;
  margin-left: -175px;
}

@media (max-width: 320px) {
  .redux-toastr .top-left,
  .redux-toastr .top-right,
  .redux-toastr .top-center,
  .redux-toastr .bottom-left,
  .redux-toastr .bottom-right,
  .redux-toastr .bottom-center {
    width: 320px;
  }
  .redux-toastr .top-center,
  .redux-toastr .bottom-center {
    margin-left: -160px;
  }
}

.redux-toastr .toastr {
  background-color: #fcfcfc;
  width: 100%;
  min-height: 70px;
  overflow: hidden;
  margin: 10px 0;
  border-radius: 4px;
  position: relative;
  z-index: 2;
  color: ${({ theme }) => theme.colors.text.primary};
  box-shadow: ${({ theme }) => theme.boxShadows.small};
  transition-duration: ${({ theme }) => theme.transitions.speed.fast};
  transition-property: all;
  transition-timing-function: ${({ theme }) => theme.transitions.easing.spring};
}

.redux-toastr .toastr:hover:not(.rrt-message) {
  box-shadow: ${({ theme }) => theme.boxShadows.medium};
}

.redux-toastr .toastr .toastr-status {
  width: 100%;
  height: 5px;
}

.redux-toastr .toastr .toastr-status.success {
  background-color: ${({ theme }) => theme.colors.form.success};
}

.redux-toastr .toastr .toastr-status.warning {
  background-color: #f7a336;
}

.redux-toastr .toastr .toastr-status.info {
  background-color: #58abc3;
}

.redux-toastr .toastr .rrt-left-container,
.redux-toastr .toastr .rrt-right-container {
  float: left;
  text-align: center;
  overflow: hidden;
}

.redux-toastr .toastr .rrt-left-container {
  width: 80px;
  top: 0;
  left: 0;
  position: absolute;
  bottom: 0;
  display: none;
}

.redux-toastr .toastr .rrt-left-container .rrt-holder {
  width: 70px;
  height: 70px;
  position: absolute;
  top: 50%;
  margin-top: -35px;
  left: 5px;
  line-height: 60px;
}

.redux-toastr .toastr .rrt-left-container .toastr-icon {
  fill: white;
  vertical-align: middle;
  margin-top: 5px;
  display: none;
}

.redux-toastr .toastr .rrt-middle-container {
  width: 65%;
  margin: 10px;
  position: relative;
  float: left;
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  font-size: 1em;
  text-align: left;
  padding: 10px 5px;
}

.redux-toastr .toastr .rrt-middle-container .rrt-title {
  font-size: 1.1em;
  font-weight: bold;
  margin-bottom: 5px;
}

.redux-toastr .toastr .rrt-right-container {
  width: 10%;
}

.redux-toastr .toastr .close-toastr {
  width: 10%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  font-size: 22px;
  border: none;
  outline: none;
  opacity: 0.5;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
}

.redux-toastr .toastr .close-toastr:hover {
  opacity: 1;
}

.redux-toastr .toastr .close-toastr:focus {
  outline: none;
}

.redux-toastr .toastr.rrt-info,
.redux-toastr .toastr.rrt-success,
.redux-toastr .toastr.rrt-warning,
.redux-toastr .toastr.rrt-error {
  color: ${({ theme }) => theme.colors.text.primary};
}

.redux-toastr .toastr.rrt-info {
  background-color: #58abc3;
}

.redux-toastr .toastr.rrt-info .rrt-progressbar {
  background-color: #378298;
}

.redux-toastr .toastr.rrt-success {
  background-color: #60bb71;
}

.redux-toastr .toastr.rrt-success .rrt-progressbar {
  background-color: #3e914d;
}

.redux-toastr .toastr.rrt-warning {
  background-color: #f7a336;
}

.redux-toastr .toastr.rrt-warning .rrt-progressbar {
  background-color: #d87e09;
}

.redux-toastr .toastr.rrt-error {
  background-color: ${({ theme }) => theme.colors.form.error};
}

.redux-toastr .toastr.rrt-error .rrt-progressbar {
  background-color: #c5352e;
}

.redux-toastr .toastr.rrt-light .rrt-progressbar {
  background-color: #ccc;
}

.redux-toastr .toastr.rrt-light .toastr-icon {
  fill: #333 !important;
  display: none;
}

.redux-toastr .toastr.rrt-message {
  opacity: 1;
  border: 1px solid #dbdbdb;
}

.redux-toastr .toastr.rrt-message .rrt-title {
  width: 90%;
  height: 50px;
  text-align: center;
  overflow: hidden;
  font-size: 1.2em;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  line-height: 50px;
  padding: 0 20px;
}

.redux-toastr .toastr.rrt-message .rrt-text {
  width: 100%;
  max-height: 400px;
  overflow: hidden;
  overflow-y: auto;
  border-top: 1px solid #f1f1f1;
  border-bottom: 1px solid #f1f1f1;
  background-color: white;
  padding: 15px;
  font-size: 1.1em;
  margin-bottom: 20px;
}

.redux-toastr .toastr.rrt-message .rrt-text img {
  display: block;
  margin: 10px auto;
  max-width: 100%;
}

.redux-toastr .toastr.rrt-message .close-toastr {
  height: 50px;
}

.redux-toastr .toastr .rrt-progress-container {
  height: 5px;
  margin: 0 -20px -20px -60px;
  position: absolute;
  bottom: 20px;
  width: 100%;
}

.redux-toastr .toastr .rrt-progress-container .rrt-progressbar {
  border-radius: 0 0 0 4px;
  height: 100%;
}

.redux-toastr .toastr-attention {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
}


`;
