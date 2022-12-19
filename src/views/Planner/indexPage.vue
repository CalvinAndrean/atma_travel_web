<template>
  <div class="container mt-5">
    <div class="card-body">
      <router-link
          :to="{ name: 'planner.create' }"
          class="btn btn-md btn-light"
          >TAMBAH PLAN</router-link>
    </div>
    <div v-for="(planner) in planners" :key="planner.id" class="card mx-auto mb-3 position-relative" style="width: 46rem;">
      <div class="card-body">
        <h5 class="card-title">{{planner.destinasi.nama}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{convertWaktu(planner.tgl)}}</h6>
        <p class="card-text">{{planner.note}}</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
        <!-- <a class="text-right position-absolute top-0 end-0"><i class="fas fa-pen"></i></a> -->
      </div>
    </div>
  </div>
</template>

<script>
// import toastr from 'toastr'
// import 'toastr/build/toastr.min.css'
import axios from 'axios'
import { onMounted, ref } from 'vue'
// import { useRouter } from 'vue-router'
// import { response } from 'express'

export default {
  setup() {
    // let router = useRouter()

    let planners = ref([])

    onMounted(() => {
      axios.get('https://vvwxx.com/api/backend-atma_travel/public/api/planners')
      .then(response => {
        planners.value = response.data.data
      }).catch(error => {
        console.log(error.response.data)
      })
    })

    function postDelete(id) {
      axios.delete(`https://vvwxx.com/api/backend-atma_travel/public/api/planners/${id}`)
      .then(() => {
        axios.get('https://vvwxx.com/api/backend-atma_travel/public/api/planners')
        .then(response => {
          planners.value = response.data.data
        }).catch(error => {
          console.log(error.response.data)
        })
      }).catch(error => {
        console.log(error.response.data)
      })
    }

    function convertWaktu(date){
        return new Date(date).toLocaleDateString('id-ID', { day:"numeric", month:"long", year:"numeric"}) 
      }

    return {
      planners,
      postDelete,
      convertWaktu
    }
  }
}
</script>