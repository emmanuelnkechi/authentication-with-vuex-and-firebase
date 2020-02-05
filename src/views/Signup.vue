<template>
<div>
    <app-header/>
    <signup/>
  </div>
</template>
<script>
import Header from "@/components/Header/Header.vue";
import Signup from "@/components/Auth/Signup.vue";
export default {
  components: {
    'app-header': Header,
    'signup': Signup
  }
};
</script>