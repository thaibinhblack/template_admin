import axios from '@/axios.js'

export defaut {
    fetchUser({commit})[
        return new Promise((resolve, reject) => {
            axios.get("/api/data-list/products")
              .then((response) => {
                commit('SET_USER', response.data)
                resolve(response)
              })
              .catch((error) => { reject(error) })
          })
    ]
}