<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <div class="card border-0 rounded shadow">
          <div class="card-body">
            <h4>TAMBAH DESTINASI</h4>
            <hr />
            <form @submit.prevent="update" enctype="multipart/form-data">
              <div class="form-group mb-3">
                <label class="form-label">Nama Destinasi</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="destinasi.nama"
                  placeholder="Masukkan nama"
                />
                <!-- validation -->
                <div
                  v-if="validation.nama"
                  class="mt-2 alert alert-danger"
                >
                  {{ validation.nama[0] }}
                </div>
              </div>
              <div class="form-group mb-3">
                <label for="content" class="form-label">Total Rating</label>
                <input
                  class="form-control"
                  v-model="destinasi.total_rating"
                  placeholder="Masukkan total rating"
                />
                <!-- validation -->
                <div
                  v-if="validation.total_rating"
                  class="mt-2 alert alert-danger"
                >
                  {{ validation.total_rating[0] }}
                </div>
              </div>
              <div class="form-group mb-3">
                <label for="content" class="form-label">Deskripsi</label>
                <textarea
                  class="form-control"
                  v-model="destinasi.deskripsi"
                  placeholder="Masukkan deskripsi"
                />
                <!-- validation -->
                <div
                  v-if="validation.deskripsi"
                  class="mt-2 alert alert-danger"
                >
                  {{ validation.deskripsi[0] }}
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
  import { reactive, ref, onMounted } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import axios from 'axios'
  export default {
    setup() {

      axios.defaults.headers.common['Authorization'] = 'Bearer: ' + localStorage.getItem('token')

    //state departemen
      const destinasi = reactive({
        nama: '',
        total_rating: '',
        deskripsi: '',
        foto: ''
      })
      //state validation
      const validation = ref([])
      const file = ref(null)
      const handleFileUpload = async() => {
         // debugger;
          console.log("selected file",file.value.files)
          //Upload to server
      }

      const config = {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
      }

      //vue router
      const router = useRouter()
      const route = useRoute()
      const id = route.params.id

      const URL_LINK = "https://vvwxx.com/api/backend-atma_travel/public/api/destinasis"

        onMounted(() => {
        //get API from Laravel Backend
        axios.get(`${URL_LINK}/${id}`, config)
            .then((response) => {
            destinasi.nama = response.data.data.nama;
            destinasi.total_rating = response.data.data.total_rating;
            destinasi.deskripsi = response.data.data.deskripsi;
            destinasi.foto = response.data.data.foto;
            })
            .catch((error) => {
            console.log(error.response.data);
            });
        });

      //method store
      function update() {
        let nama = destinasi.nama
        let total_rating = destinasi.total_rating
        let deskripsi = destinasi.deskripsi
        axios.post(`${URL_LINK}/${id}`, {
          nama: nama,
          total_rating: total_rating,
          deskripsi: deskripsi,
        }, config).then(() => {
          router.push({
            name: 'destinasi.index',
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
        destinasi,
        validation,
        handleFileUpload,
        router,
        file,
        update
      }
    },
  }
</script>
<style>
</style>