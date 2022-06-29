<template>
  <div class="about4">
    <app-header></app-header>
    <h1>This is an about4 page</h1>
    <div class="text"> {{message}} </div>
    <button v-bind:onclick="clickButton">click me</button>
  </div>
</template>


<script>

const appHeader = {
  template: '<h2>HELLO</h2>'
}

export default {
  components: {
    'app-header': appHeader
  },
  data() {
    return {
      message: 'methods 실습-1'
    }
  },
  methods: {
    clickButton() {
      alert('꺄하하하하성공');
    }
  }
}
</script>

<style scoped>
h1{
  color: tomato;
}
h2{
  color: rgb(148, 71, 255);
}
.text{
  color: rgb(148, 71, 255);
  font-size: 50px;
}
</style>
