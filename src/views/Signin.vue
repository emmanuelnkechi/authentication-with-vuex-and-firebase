<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <app-signin></app-signin>
  </div>
</template>
<script>
import Header from "@/components/Header/Header.vue";
import Signin from "@/components/Auth/Signin.vue";
export default {
  components: {
    appHeader: Header,
    appSignin: Signin
  }
};
</script>