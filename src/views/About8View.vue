<template>
  <div class="about8">
    <app-header></app-header>
    <h1>This is an about8 page</h1>
    <div class="text"> {{ message }} </div>
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
      message: 'Filters'
    }
  },
  // filters: {
	// 	capitalize: function(value) {
	// 		if (!value) return ''
	// 		value = value.toString()
	// 		return value.cartAt(0).toUpperCase() + value.slice(1)
	// 	}
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
