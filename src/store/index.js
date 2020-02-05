import Vue from 'vue'
import Vuex from 'vuex'
import globalAxios from 'axios'
import router from '@/router'


Vue.use(Vuex)
import axios from '@/axios-auth'
export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.idToken
      state.userId = userData.userId
    },
    storeUser(state, user) {
      state.user = user
    },
    clearAuthData (state) {
      state.idToken = null,
      state.userId = null
    }
  },
  actions: {
    setLogoutTimer({commit}, expirationTime) {
    setTimeout(() =>{
      commit('clearAuthData')
    }, expirationTime * 1000)
    },
    signUp({commit, dispatch}, authData) {
      axios.post('/accounts:signUp?key=AIzaSyBOKFWskjKFCauzOUB5ApfArJhaysJ1csw', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
    })
    .then(response => {
      console.log(response)
      commit('authUser', {
        idToken: response.data.idToken,
        userId: response.data.localId,
        
      })
      const now = new Date()
      const expirationDate = new Date(now.getTime() + response.data.expiresIn * 1000)
      localStorage.setItem('token', response.data.idToken)
      localStorage.setItem('userId', response.data.localId)
      localStorage.setItem('expireIn', expirationDate)
      dispatch('storeUser', authData)
      dispatch('setLogoutTimer', response.data.expiresIn)
    }
      )
    .catch(errors =>
        console.log(errors))
    },
    signIn({commit, dispatch}, authData) {
      axios.post('/accounts:signInWithPassword?key=AIzaSyBOKFWskjKFCauzOUB5ApfArJhaysJ1csw', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
    })
    .then(response => { 
      console.log(response)
      commit('authUser', {
        idToken: response.data.idToken,
        userId: response.data.localId
      })
      const now = new Date()
      const expirationDate = new Date(now.getTime() + response.data.expiresIn * 1000)
      localStorage.setItem('token', response.data.idToken)
      localStorage.setItem('userId', response.data.localId)
      localStorage.setItem('expireIn', expirationDate)
      dispatch('setLogoutTimer', response.data.expiresIn)
    })
    .catch(errors =>
        console.log(errors))
    },
    tryAutoLogin({commit}) {
    const token = localStorage.getItem('token')
    if(!token){
      return
    }
    const expirationDate = localStorage.getItem('expireIn')
    const now = new Date()
    if(now >= expirationDate){
      return
    }
    const userId = localStorage.getItem('userId')
    commit('authUser', {
      token: token,
      userId: userId
    })
    },
    logout({commit}){
    commit('clearAuthData')
    localStorage.removeItem('expireIn')
    localStorage.removeItem('userId')
    localStorage.removeItem('token')
    router.replace('/signin')
    },
    storeUser({commit, state}, userData) {
    debugger
      if(!state.idToken){
        return
      }
       globalAxios.post('/users.json' + '?auth=' + state.idToken,
       {
         email:userData.email,
         password:userData.password
       }
       )
       .then(
       console.log(res => console.log(res))
       )
       .catch(error => console.log(error))
    },
    fetchUser({commit, state}) {
      if(!state.idToken){
        return
      }
      globalAxios.get("/users.json" + "?auth=" + state.idToken)
         // eslint-disable-next-line no-console
        .then(res => {
             // eslint-disable-next-line no-console
            console.log(res)
            const data = res.data
            const users = []
            for(let key in data){
               const user = data[key]
                user.id = key
                users.push(user)
            }
             // eslint-disable-next-line no-console
            console.log(users)
            commit('storeUser', users[0])
        })
         // eslint-disable-next-line no-console
        .catch(error => console.log(error)) 
    }
  },
  getters: {
user(state) {
  return state.user
},
isAuthenticated(state) {
  return state.idToken !== null
}
  },
  modules: {
  }
})
