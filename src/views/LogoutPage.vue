<template>
  <div class="row justify-content-md-center">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">ARE YOU SURE TO LOGOUT?</div>
                <div class="card-body">
                    <form>
                        <div class="text-center">
                            <button class="btn btn-dark m-3" @click.prevent="logout()">Yes</button>
                            <router-link :to="{name: 'Home'}" class="btn btn-md btn-light">No</router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import { useRouter } from 'vue-router'
  // import { onMounted, ref } from 'vue'

  export default {
    setup() {

      const URL_LINK = "http://127.0.0.1:8000/api"

      const router = useRouter()
      const config = {
          headers: {
            'content-type': 'multipart/form-data',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
      }

      function logout() {
        axios.post(`${URL_LINK}/logout`, {
          halo : ''
        }, config).then((response) => {
          alert('Logout Success')
          console.log(response)

          router.push({
            name: 'beranda'
          })

        }).catch((error) => {
          console.log(error)
        })
      }

      return {
        logout
      }

    }
  }

</script>