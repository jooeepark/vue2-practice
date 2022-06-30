<template>
  <div class="about9">
    <app-header></app-header>
    <h1>This is an about9 page</h1>
    <div class="text"> {{message}} </div>
    <button-tab>
      <!-- slot영역 -->
      <h1>First Header</h1>
    </button-tab>
    <button-tab>
      <!-- slot영역 -->
      <h1>Second Header</h1>
    </button-tab>
    <button-tab>
      <!-- slot영역 -->
      <h1>Third Header</h1>
    </button-tab>
  </div>
</template>

<script>

// 하위 컴포넌트 
const appHeader = {
  template: '<h2>HELLO</h2>'
}

const ButtonTab = {
  template: '<button><slot></slot></button>'
}

// 상위 컴포넌트 : root 컴포넌트
export default {
  components: {
    'app-header': appHeader,
    'button-tab': ButtonTab
  },
  data() {
    return {
      message: 'Slot-1 : 1개의 슬롯'
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
