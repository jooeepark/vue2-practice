<template>
  <div class="about2">
    <app-header></app-header>
    <h1>This is an about page</h1>
    <div class="text"> {{message}} </div>
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
      message: '데이터 바인딩'
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
}
</style>
