<template>
  <div>
    <PQRS />
  </div>
</template>

<script>
import PQRS from "./components/PQRS.vue";

export default {
  name: "App",
  components: {
    PQRS,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
