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
        <router-link :to="{ name: 'planner.edit', params: { id: planner.id}}" class="card-link">Edit</router-link>

        <a href="#" @click.prevent="postDelete(planner.id)" class="card-link">Delete</a>
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

    const config = {
          headers: {
            'content-type': 'multipart/form-data',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
    }

    const URL_LINK = "http://127.0.0.1:8000/api"

    onMounted(() => {
      axios.get(`${URL_LINK}/plannersAll/${localStorage.getItem('user')}`, config)
      .then(response => {
        planners.value = response.data.data
      }).catch(error => {
        console.log(error.response.data)
      })
    })

    function postDelete(id) {
      axios.delete(`${URL_LINK}/planners/${id}`, config)
      .then(() => {
        axios.get(`${URL_LINK}/planners`, config)
        .then(response => {
          alert("Data berhasil dihapus")
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