<template>
  <div class="container">
    <div class="title">
      <h1 class="neon">
        Le
        <p class="bad-neon2">a</p>ve Me a
      </h1>
      <h1 class="neon">
        <p class="bad-neon">M</p>essage
      </h1>
      <div class="line" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: rgb(41, 22, 54);
}

.title {
  display: flex;
  flex-direction: row;
  position: relative;
}

.neon {
  font-size: calc(2vw + 1vh + 1.5vmin);
  font-family: "Courgette", cursive;
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff,
    0 0 40px rgb(255, 128, 255), 0 0 80px rgb(255, 128, 255),
    0 0 90px rgb(255, 128, 255), 0 0 100px rgb(255, 128, 255), 0 0 150px #fff;
  display: flex;
  flex-direction: row;
}

.line {
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
  width: calc((2vw + 1vh + 1.5vmin) * 9);
  height: calc(1.5vmin);
  position: absolute;
  top: calc((2vw + 2vh + 1.5vmin) / 2);
  left: 0;
}

.bad-neon {
  margin-left: calc((2vw + 1vh + 1.5vmin) / 2);
  z-index: 2;
  animation: neon-blink 10s infinite;
}

.bad-neon2 {
  z-index: 2;
  animation: neon-blink2 10s infinite;
}

h1,
p {
  z-index: 2;
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

@keyframes neon-blink2 {
  0% {
    color: #fff;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 150px #fff;
  }
  24% {
    color: #fff;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 150px #fff;
  }
  25% {
    color: black;
    text-shadow: 0 0 5px #000;
  }
  26% {
    color: #fff;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 150px #fff;
  }
  27% {
    color: black;
    text-shadow: 0 0 5px #000;
  }
  28% {
    color: #fff;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 150px #fff;
  }
  29% {
    color: black;
    text-shadow: 0 0 5px #000;
  }
  30% {
    color: #fff;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 150px #fff;
  }
  31% {
    color: black;
    text-shadow: 0 0 5px #000;
  }
  32% {
    color: #fff;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 150px #fff;
  }
  33% {
    color: black;
    text-shadow: 0 0 5px #000;
  }
  34% {
    color: #fff;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 150px #fff;
  }
  35% {
    color: black;
    text-shadow: 0 0 5px #000;
  }
  65% {
    color: black;
    text-shadow: 0 0 5px #000;
  }
  67% {
    color: #fff;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 150px #fff;
  }
  100% {
    color: #fff;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 150px #fff;
  }
}
</style>