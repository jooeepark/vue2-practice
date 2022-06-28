<template>
  <div class="about2">
    <app-header></app-header>
    <h1>This is an about2 page</h1>
    <child-component v-bind:propsdata="message" class="text"></child-component>
    <!--출력될 결과는 props이다-->
  </div>
</template>


<script>
var childComponent = {
  props: ['propsdata'],
  template: '<p>{{ propsdata }}</p>'
}

const appHeader = {
  template: '<h2>HELLO</h2>'
}

export default {
  components: {
    'app-header': appHeader,
    'child-component': childComponent
  },
  data() {
    return {
      message: 'props'
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
