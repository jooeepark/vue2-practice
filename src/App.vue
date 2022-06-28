<template>
  <div id="app">
    <nav>
    <router-link to="/" class="color">Home</router-link> |
    <router-link to="/about" class="color">About</router-link> |
    <router-link to="/about2" class="color">About2</router-link> |
    <router-link to="/about3" class="color">About3</router-link> |
    <router-link to="/about4" class="color">About4</router-link> |
    <router-link to="/about5" class="color">About5</router-link> 
    </nav>
    <router-view></router-view>
  </div>
  

</template>

<script>

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>
