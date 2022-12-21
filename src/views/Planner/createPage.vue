<template>
  <div class="page-holder bg-gray-100">
        <div class="container-fluid px-lg-4 px-xl-5 contentDiv">
              <!-- Page Header -->
              <div class="page-header mb-4">
                <!-- <h1 class="page-heading">PLANNER</h1> -->
              </div>
          <section>
            <div class="row">
              <div class="col-lg-8">
                <form class="card mb-4" @submit.prevent="store" enctype="multipart/form-data">
                  <div class="card-header">
                    <h4 class="card-heading">TAMBAH PLANNER</h4>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="mb-4">
                          <label class="form-label">Destinasi</label>
                          <input class="form-control" 
                          type="text" 
                          v-model="planners.id_destinasi"
                          placeholder="Destinasi">
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-6">
                        <div class="mb-4">
                          <label class="form-label">Tanggal</label>
                          <div class="input-group date" id="datepicker">
                          <input type="date" class="form-control" id="date" placeholder="dd/mm/yyyy" v-model="planners.tgl"/>
                          </div>
                          
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-12">
                        <div class="mb-4">
                          <label class="form-label">Note</label>
                          <textarea class="form-control" placeholder="Note" id="exampleFormControlTextarea1" rows="3" v-model="planners.note"></textarea>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-6">
                        <div class="mb-4">
                          <label class="form-label">Jumlah Orang</label>
                          <input class="form-control" 
                          type="number" 
                          v-model="planners.jumlah_orang">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer text-end">
                    <button class="btn btn-dark" type="submit">SAVE</button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
</template>

<script>

import axios from 'axios'
import { useRouter } from 'vue-router'
import { onMounted, reactive, ref } from "vue";

  export default {
    setup() {
      const planners = reactive({
        id_destinasi: '',
        tgl: '',
        note: '',
        jumlah_orang: ''
      })

      // const message = ref('')

      const URL_LINK = "http://127.0.0.1:8000/api"

      let destinasi = ref([])

      const config = {
          headers: {
            'content-type': 'multipart/form-data',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
      }

      onMounted(() => {
        axios.get(`${URL_LINK}/destinasis`, config)
        .then(response => {
          destinasi.value = response.data.data
        }).catch(error => {
          console.log(error.response.data)
        })
      })

      //state validation
      const validation = ref([])
      //vue router
      const router = useRouter()

      function store() {
        let id_destinasi = planners.id_destinasi
        let tgl = planners.tgl
        let note = planners.note
        let jumlah_orang = planners.jumlah_orang

        axios.post(`${URL_LINK}/planners`, {
          id_destinasi: id_destinasi,
          tgl: tgl,
          note: note,
          jumlah_orang: jumlah_orang
        }, config).then(() => {
          router.push({
            name: 'planner.index',
            params: {
              type: "success",
              text: "Data Berhasil Ditambahkan"
            }
          })
        }).catch(error => {
          console.log(error.response.data)
          validation.value = error.response.data
        })
      }

      return {
        planners,
        store,
        destinasi,
        validation
      }
    }


  }

</script>