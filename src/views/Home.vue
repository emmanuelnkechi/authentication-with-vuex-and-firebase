<template>
  <div>
   <app-header></app-header>
  <welcome></welcome>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Welcome from '@/components/Welcome.vue'
export default {
  name: 'home',
 components:{
   appHeader: Header,
   Welcome
 }
}
</script>
<style scoped>
.welcome{
  text-align: center;
  vertical-align: center;
  margin: 100px auto; 
}
</style>