<template>
  <div class="about6">
    <app-header></app-header>
    <h1>This is an about6 page</h1>
    <div class="text"> {{ message}} </div>
    <div>{{ reverseMessage }}</div>
  </div>
</template>

<script>

// 하위 컴포넌트 
const appHeader = {
  template: '<h2>HELLO</h2>'
}

// 상위 컴포넌트 : root 컴포넌트
export default {
  components: {
    'app-header': appHeader
  },
  data() {
    return {
      message: '데이터 바인딩'
    }
  },
  computed: {
    reverseMessage() {
      return this.message.split('').reverse().join('');
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
