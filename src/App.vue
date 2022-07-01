<template>
  <div id="app">
    <nav>
    <router-link to="/" class="color">Home</router-link> |
    <router-link to="/about1" class="color">About1</router-link> |
    <router-link to="/about2" class="color">About2</router-link> |
    <router-link to="/about3" class="color">About3</router-link> |
    <router-link to="/about4" class="color">About4</router-link> |
    <router-link to="/about5" class="color">About5</router-link> |
    <router-link to="/about6" class="color">About6</router-link> |
    <router-link to="/about7" class="color">About7</router-link> |
    <router-link to="/about8" class="color">About8</router-link> |
    <router-link to="/about9" class="color">About9</router-link> |
    <router-link to="/about10" class="color">About10</router-link> 
    </nav>
    <router-view></router-view>

    <MixinsWorld :username="username"></MixinsWorld>
    <MixinsWorld username="바니"></MixinsWorld>
    <MixinsWorld></MixinsWorld>
    <button @click="changeName">바꿔!</button>
  </div>
  

</template>

<script>

import MixinsWorld from './components/MixinsWorld.vue';

export default {
  name: 'App',
  components: {
    MixinsWorld
  },
  data() {
    return {
      username: 'username'
    }
  },
  methods: {
    changeName() {
      this.username = '박주희';
    }
  }
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
html{
  background: beige;
}
.color{
  color: tomato;
}
nav {
  padding: 30px;
  color: tomato;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: rgb(148, 71, 255);
}
button{
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 35px;
  background: tomato;
  color:#fff;
}
button:hover{
  cursor: pointer;
  background: rgb(247, 147, 129);
}
</style>
