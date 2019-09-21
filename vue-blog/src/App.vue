<template>
  <div id="app">
    <Header />
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Courgette&display=swap");
@import url("https://fonts.googleapis.com/css?family=Anton&display=swap");

* {
  margin: 0;
  color: white;
}

.app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
