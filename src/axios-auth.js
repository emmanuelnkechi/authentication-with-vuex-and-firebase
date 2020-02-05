import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1'
  })
  
//   instance.defaults.headers.common['HELLO'] = 'hello'

  export default instance