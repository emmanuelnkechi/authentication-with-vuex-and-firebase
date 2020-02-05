<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand ><router-link to="/" class="links">Vue Management</router-link></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
         
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-button size="sm" class="my-2 my-sm-0 m-3" type="submit" v-if="!auth"><router-link to="/signup" class="links">Signup</router-link></b-button>
               <b-button size="sm" class="my-2 my-sm-0 m-3" type="submit" v-if="!auth"><router-link to="/signin" class="links">Signin</router-link></b-button>
                <b-button size="sm" class="my-2 my-sm-0 m-3" type="submit" v-if="auth"><router-link to="/dashboard" class="links">Dashboard</router-link></b-button>
                <b-button size="sm" class="my-2 my-sm-0 m-3 links" type="submit" v-if="auth" @click="onLogout">Logout</b-button>
            </b-nav-form>

          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    auth(){
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    onLogout() {
     this.$store.dispatch('logout')
    }
  }
}
</script>

<style scoped>
a.links{
  color: white;
  text-decoration: none;
}
</style>