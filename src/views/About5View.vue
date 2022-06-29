<template>
  <div class="about5">
    <app-header></app-header>
    <h1>This is an about5 page</h1>
    <div class="text"> {{message}} </div>
    <button v-bind:click="displayProducts">Refresh - Axios설치후 실습</button>
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
      message: 'methods 실습-2',
      // products: [] Axios설치후 진행해볼것
    }
  },
  // methods: {
  //   displayProducts() {
  //     this.fetchData();
  //     //......
  //   },
  //   fetchData() {
  //     axios.get('/products').then(function(response) {
  //       this.products = response.data;
  //     }),catch(function(error) {
  //       alert(error);
  //     });
  //   }
  // }
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
