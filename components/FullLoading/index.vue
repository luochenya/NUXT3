<template>
  <div class="loader">
    <div class="logo">
      <div class="white"></div>
      <div class="orange"></div>
      <div class="red"></div>
    </div>
    <p>Loading</p>
  </div>
</template>
<style lang="scss" scoped>
$color: black;
$size: 100px;
$borderWidth: 4px;
$totalTime: 1.5s;
$redWidth: 27%;
$orangeHeight: 50%;
$whiteWidth: 23%;
$backgroundColor1: white;
$backgroundColor2: #F3B93F;
$backgroundColor3: #EA5664;
$backgroundColor4: orange;
$backgroundColor5: red;

div.loader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;

  p {
    font-family: 'Helvetica', 'Arial', sans-serif;
    margin: 1em 0 0 0;
    font-size: 16px;
  }
}

div.logo {
  width: $size;
  height: $size;
  box-sizing: border-box;
  position: relative;
  background-color: white;
  &::before,
  &::after {
    z-index: 1;
    box-sizing: border-box;
    content: '';
    position: absolute;
    border: $borderWidth solid transparent;
    width: 0;
    height: 0;
    animation-direction: alternate;
    animation-timing-function: linear;
  }
  &::before {
    top: 0;
    left: 0;
    animation: border-before $totalTime infinite;
    animation-direction: alternate;
  }
  &::after {
    bottom: 0;
    right: 0;
    animation: border-after $totalTime infinite;
    animation-direction: alternate;
  }
  & > div {
    position: absolute;
    opacity: 0;
  }
  div.white {
    border-left: $borderWidth solid $color;
    top: 0;
    bottom: 0;
    right: 0;
    width: 0;
    animation: $backgroundColor1 $totalTime infinite;
    animation-direction: alternate;
  }
  div.orange {
    border-top: $borderWidth solid $color;
    left: 0;
    bottom: 0;
    right: 0;
    height: 0;
    background-color: $backgroundColor2;
    animation: $backgroundColor4 $totalTime infinite;
    animation-direction: alternate;
  }
  div.red {
    border-right: $borderWidth solid $color;
    top: 0;
    bottom: 0;
    left: 0;
    width: 0;
    background-color: $backgroundColor3;
    animation: $backgroundColor5 $totalTime infinite;
    animation-direction: alternate;
  }
}

@keyframes border-before {
  0% {
    width: 0;
    height: 0;
    border-top-color: $color;
    border-right-color: transparent;
  }
  12.49% {
    border-right-color: transparent;
  }
  12.5% {
    height: 0;
    width: 100%;
    border-top-color: $color;
    border-right-color: $color;
  }
  25%,
  100% {
    width: 100%;
    height: 100%;
    border-top-color: $color;
    border-right-color: $color;
  }
}

@keyframes border-after {
  0%,
  24.99% {
    width: 0;
    height: 0;
    border-left-color: transparent;
    border-bottom-color: transparent;
  }
  25% {
    width: 0;
    height: 0;
    border-left-color: transparent;
    border-bottom-color: $color;
  }
  37.49% {
    border-left-color: transparent;
    border-bottom-color: $color;
  }
  37.5% {
    height: 0;
    width: 100%;
    border-left-color: $color;
    border-bottom-color: $color;
  }
  50%,
  100% {
    width: 100%;
    height: 100%;
    border-left-color: $color;
    border-bottom-color: $color;
  }
}

@keyframes red {
  0%,
  50% {
    width: 0;
    opacity: 0;
  }
  50.01% {
    opacity: 1;
  }
  65%,
  100% {
    opacity: 1;
    width: $redWidth;
  }
}

@keyframes orange {
  0%,
  65% {
    height: 0;
    opacity: 0;
  }
  65.01% {
    opacity: 1;
  }
  80%,
  100% {
    opacity: 1;
    height: $orangeHeight;
  }
}

@keyframes white {
  0%,
  75% {
    width: 0;
    opacity: 0;
  }
  75.01% {
    opacity: 1;
  }
  90%,
  100% {
    opacity: 1;
    width: $whiteWidth;
  }
}
</style>
