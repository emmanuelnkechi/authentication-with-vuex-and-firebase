<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('tryAutoLogin')
  }
}
</script>
<style>
</style>
