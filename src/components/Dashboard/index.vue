<template>
    <div class="dashboard">
        <h5>This is the dashboard</h5>
        <p>You can only see this dashboard if you are authenticated!!</p>
        <p v-if="email">Your Email Address: {{ email }}</p>
    </div>
</template>

<script>
import axios from '@/axios-auth'
export default {
    computed: {
     email() {
          return !this.$store.getters.user ? false : this.$store.getters.user.email 
     }
    },
    created() {
       this.$store.dispatch('fetchUser')
    }
}
</script>

<style>
.dashboard{
    text-align: center;
}
</style>