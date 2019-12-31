import axios from '@/axios.js'

export default {
    fetchUsers({commit}){
        return new Promise((resolve, reject) => {
            axios.get("/api/data-list/product")
              .then((response) => {
                commit('SET_USERS', response.data)
                resolve(response)
              })
              .catch((error) => { reject(error) })
          })
    }
}