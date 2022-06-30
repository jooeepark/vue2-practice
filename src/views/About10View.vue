<template>
  <div class="about10">
    <app-header></app-header>
    <h1>This is an about10 page</h1>
    <div class="text"> {{message}} </div>
    <button-tab>
      <!-- slot영역 -->
      <template v-slot:header>
        <h1>First Header</h1>
      </template>

      <template v-slot:content>
        <div class="content">Tab Contents #1</div>
      </template>

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
    'button-tab': ButtonTab,
  },
  data() {
    return {
      message: 'Slot-2 : 두개 이상의 이름이 있는 슬롯',
      name: 'ButtonTab'
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
