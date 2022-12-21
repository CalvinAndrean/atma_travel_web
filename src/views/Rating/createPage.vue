<template>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-12">
          <div class="card border-0 rounded shadow">
            <div class="card-body">
                <h3>Add rating</h3>
              <hr />
              <form @submit.prevent="store" enctype="multipart/form-data">
                <div class="form-group mb-3">
                  <label class="form-label">Rating</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model="ratings.rating"
                    placeholder="Masukkan rating"
                  />
                  <!-- validation -->
                  <div
                    v-if="validation.rating"
                    class="mt-2 alert alert-danger"
                  >
                    {{ validation.nama[0] }}
                  </div>
                </div>
                <div class="form-group mb-3">
                  <label for="content" class="form-label">Komentar</label>
                  <textarea
                    class="form-control"
                    v-model="ratings.komentar"
                    placeholder="Masukkan komentar"
                  />
                  <!-- validation -->
                  <div
                    v-if="validation.komentar"
                    class="mt-2 alert alert-danger"
                  >
                    {{ validation.komentar[0] }}
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">SIMPAN</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
    import { reactive, ref } from 'vue'
    import { useRouter } from 'vue-router'
    import axios from 'axios'
    export default {
      setup() {
      //state departemen
        const ratings = reactive({
          komentar: '',
          rating: '',
          id_destinasi: '',
          id_user: ''
        })
        const router = useRouter()
        // const route = useRoute()
        //state validation
        const validation = ref([])
        const id_user = localStorage.getItem('user')
        const id_destinasi = localStorage.getItem('idDestinasi')
        ratings.id_destinasi = id_destinasi
        ratings.id_user = id_user
        console.log(ratings.id_user)
        console.log(ratings.id_destinasi)

  
        //vue router

        const URL_LINK = "http://127.0.0.1:8000/api/ratings"
  
        //method store
        function store() {
          const config = {
            headers: {
              'content-type': 'multipart/form-data',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
          }
          let data = new FormData();
          data.append('komentar', ratings.komentar);
          data.append('rating', ratings.rating);
          data.append('id_destinasi', ratings.id_destinasi)
          axios.post(URL_LINK, data, config)
          .then(() => {
          //redirect ke post index
            router.push({
              name: 'destinasirating.index'
            })
          }).catch(error => {
          //assign state validation with error
            validation.value = error.response.data
            console.log(validation.value)
          })
        }
      //return
        return {
          ratings,
          validation,
          router,
          store
        }
      },
    }
  </script>
  <style>
  </style>