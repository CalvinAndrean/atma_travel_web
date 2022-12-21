<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <div class="card border-0 rounded shadow">
          <div class="card-body">
              <h3>Update rating</h3>
            <hr />
            <form @submit.prevent="update" enctype="multipart/form-data">
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
      const route = useRoute()
      //state validation
      const validation = ref([])
      const id_user = localStorage.getItem('user')
      const id_destinasi = localStorage.getItem('local_id_destinasi')
      ratings.id_destinasi = id_destinasi
      ratings.id_user = id_user
      console.log(ratings.id_user)
      console.log(ratings.id_destinasi)


      //vue router

      const URL_LINK = "http://127.0.0.1:8000/api/ratings"

      onMounted(() => {
        // alert(`${URL_LINK}planners/${route.params.id}`)
        axios.get(`${URL_LINK}/${route.params.id}`, config) .then((response) => {
          ratings.komentar = response.data.data[0].komentar
          ratings.rating = response.data.data[0].rating

        }).catch((error) => {
          console.log(error.response.data)
        })
      })

      //method store
      function update() {
        let komentar = ratings.komentar
        let rating = ratings.rating

        axios.put(`${URL_LINK}/${route.params.id}`, {
          komentar: komentar,
          rating: rating,

        }, config).then(() => {
          router.push({
            name: 'rating.index',
            params: {
              type: "success",
              text: "Data Berhasil Diedit"
            }
          })
        }).catch(error => {
          console.log(error.response.data)
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