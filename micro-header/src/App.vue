<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>导航1</div>
    <div>导航2</div>
    <div>导航3</div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #000;
  color: #fff;
  height: 60px;
  overflow: hidden;
  padding: 0 20px;
}
#app img {
  width: 50px;
  margin-right: 30px;
}
#app div{
  margin-left: 10px;
}
</style>
