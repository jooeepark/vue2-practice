<template>
  <div>
    <h1>MixinsWorld!!! {{ username }}</h1>
  </div>
</template>

<script>
export default {
	name: 'MixinsWorld',
  props: {
    username: String,
  }
}
</script>

<style scoped>
h1{
  color: rgb(148, 71, 255);
}
</style>
