<template>
  <div class="about3">
    <app-header></app-header>
    <h1>This is an about3 page</h1>
    <div class="text"> {{message}} </div>
    <child-component v-on:update="showAlert"></child-component>
  </div>
</template>

<script>

// 하위 컴포넌트 
const appHeader = {
  template: '<h2>HELLO</h2>'
}
const childComponent = {
  methods: {
    sendEvent: function() {
      this.$emit('update');
    }
  }
}

// 상위 컴포넌트 : root 컴포넌트
export default {
  components: {
    'app-header': appHeader,
    'child-component': childComponent
  },
  methods: {
    showAlert: function() {
      alert('event recieved');
    }
  },
  data() {
    return {
      message: '$emit'
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
