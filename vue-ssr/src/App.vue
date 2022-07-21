<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <div><input v-model="message" /></div>
    <div><button @click="onClick">点击测试22211</button></div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "测试",
    };
  },
  methods: {
    onClick() {
      console.log("hw");
    },
  },
};
</script>

<style scoped lang="scss">
</style>