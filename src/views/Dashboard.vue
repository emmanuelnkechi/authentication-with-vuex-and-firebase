<template>
  <div>
    <app-header></app-header>
    <dashboard></dashboard>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Dashboard from "@/components/Dashboard/index.vue";
export default {
  components: {
      appHeader: Header,
    Dashboard
  }
};
</script>