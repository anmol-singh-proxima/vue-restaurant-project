<template>
  <router-view />
</template>

<script>
/* eslint-disable */
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
.logo {
  width: 100px;
}
.register, .login, .add, .update {
  width: 300px;
  margin: auto;
  display: block;
}
.register input, .login input, .add input, .update input {
  width: 100%;
  padding: 12px 18px;
  display: block;
  margin: auto;
  margin-bottom: 20px;
  border: 1px solid skyblue;
}
.register button, .login button, .add button, .update button {
  width: 100%;
  padding: 12px 18px;
  display: block;
  margin: auto;
  border: 1px solid skyblue;
  border-radius: 5px;
  background-color: skyblue;
  color: white;
  cursor: pointer;
}
.update label {
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 6px;
  float: left;
}
.restautants button {
  color: #eee;
  background-color: cornflowerblue;
  border: 1px solid cornflowerblue;
  border-radius: 5px;
  padding: 6px 12px;
  margin: 5px;
}
</style>
