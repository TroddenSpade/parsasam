<template>
  <div class="header" ref="header">
    <h1 class="neon">
      <p class="bad-neon">B</p>
      <p>log</p>
      <div class="line" />
    </h1>
    <router-link to="/" tag="a" active-class="active" exact>HOME</router-link>
    <router-link to="/contact" tag="a" active-class="active" exact>Contact</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #272838;
}

.neon {
  position: relative;
  font-size: calc(2vw + 1vh + 1.5vmin);
  font-family: "Courgette", cursive;
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff,
    0 0 40px rgb(255, 128, 255), 0 0 80px rgb(255, 128, 255),
    0 0 90px rgb(255, 128, 255), 0 0 100px rgb(255, 128, 255), 0 0 150px #fff;
  display: flex;
  flex-direction: row;
}

p {
  z-index: 2;
}

.line {
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
  width: calc(2vw + 1vh + 1.5vmin);
  height: calc(1vw + 1.5vmin);
  position: absolute;
  top: calc((1vw + 1vh) / 2);
  left: 0;
  z-index: 1;
}

.bad-neon {
  z-index: 3;
  animation: neon-blink 10s infinite;
}

@keyframes neon-blink {
  0% {
    color: #fff;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff,
      -10px 0 100px rgb(255, 128, 255), 0 0 150px #fff;
  }
  2% {
    color: black;
    text-shadow: 0 0 5px #000;
  }
  4% {
    color: #fff;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff,
      -10px 0 100px rgb(255, 128, 255), 0 0 150px #fff;
  }
  5% {
    color: black;
    text-shadow: 0 0 5px #000;
  }
  18% {
    color: black;
    text-shadow: 0 0 5px #000;
  }
  20% {
    color: #fff;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff,
      -10px 0 100px rgb(255, 128, 255), 0 0 150px #fff;
  }
  66% {
    color: #fff;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff,
      -10px 0 100px rgb(255, 128, 255), 0 0 150px #fff;
  }
  68% {
    color: black;
    text-shadow: 0 0 5px #000;
  }
  71% {
    color: #fff;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff,
      -10px 0 100px rgb(255, 128, 255), 0 0 150px #fff;
  }
  100% {
    color: #fff;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff,
      -10px 0 100px rgb(255, 128, 255), 0 0 150px #fff;
  }
}
</style>