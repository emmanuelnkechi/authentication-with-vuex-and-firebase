   <template>
  <form @submit.prevent = 'reSubmit'>
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <label for="email">Email:</label>
        <input type="email" class="form-control"
        v-model="email" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <label for="password">Password:</label>
        <input type="password" class="form-control" 
        v-model="password"/>
      </div>
    </div>
     <div class="submit row mt-3 ">
      <div class="col-md-6 offset-md-3" style="float: right">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div> 
  </form>
</template>

<script>
export default {
  data(){
    return {
      email: "",
      password: ""
    }
  },
  methods: {
     reSubmit() {
       const formData = {
         email: this.email,
         password: this.password
       }
       // eslint-disable-next-line no-console
       console.log(formData)
       
        this.$store.dispatch('signIn', {email: formData.email, password: formData.password})
       
     }
  }
}
</script>

<style scoped>
form {
  margin: 100px auto;
  box-sizing: border-box;
}
</style>