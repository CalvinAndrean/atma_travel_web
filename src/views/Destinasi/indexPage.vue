<template>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-12">
          <div class="card border-0 rounded shadow">
            <div class="card-body">
              <router-link
                :to="{ name: 'destinasi.create' }"
                ><button class="btn btn-success">TAMBAH DESTINASI</button></router-link>
            </div>
          </div>
        </div>
      </div>

      <div v-for="(destinasi, id) in destinasis" :key="id" style="display: inline-block; padding: 10px;">
        <div class="card" style="width: 18rem;">
          <img :src="'http://localhost:8000/storage/users/'+destinasi.foto" alt="{{ destinasi.foto }}" style="width: 286px; height: 200px;">
          <div class="card-body">
            <h5 class="card-title">{{ destinasi.nama }}</h5>
            <p class="card-text">{{ destinasi.deskripsi }}</p>
            <router-link :to="{name: 'planner.create', params: { id: destinasi.id }}"><button class="btn btn-primary" style="margin-right: 10px;" @click="getIdDestinasi(destinasi.id)">Tambah plan</button></router-link>
            <router-link :to="{name: 'destinasirating.index', params: { id: destinasi.id }}"><button class="btn btn-light" @click="getIdDestinasi(destinasi.id)">Read more</button></router-link>
            
            <div v-if="destinasi.id_user == id_user">
              <router-link :to="{name: 'destinasi.edit', params: { id: destinasi.id }}"><button class="btn btn-primary" style="margin-right: 10px; margin-top: 10px;">Edit</button></router-link>

              <button class="btn btn-danger" style="margin-top: 10px;" @click.prevent="postDelete(destinasi.id)">Delete</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </template>
      <script>
  // import router from "@/router";
import axios from "axios";
  import { onMounted, ref } from "vue";
  export default {
    setup() {
      //reactive state
      let destinasis = ref([]);
      //mounted

      const id_user = localStorage.getItem('user')

      const config = {
          headers: {
            'content-type': 'multipart/form-data',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
      }

      const URL_LINK = "http://127.0.0.1:8000/api/destinasis"

      onMounted(() => {
        //get API from Laravel Backend
        axios.get(URL_LINK, config)
          .then((response) => {
            //assign state posts with response data
            destinasis.value = response.data.data;
          })
          .catch((error) => {
            console.log(error.response.data);
          });
      });
  
      function postDelete(id) {
      axios.delete(`${URL_LINK}/${id}`, config)
      .then(() => {
        axios.get(`${URL_LINK}`, config)
        .then(response => {
          alert("Data berhasil dihapus")
          destinasis.value = response.data.data
        }).catch(error => {
          console.log(error.response.data)
        })
      }).catch(error => {
        console.log(error.response.data)
      })
    }

    function getIdDestinasi(id) {
          localStorage.setItem('idDestinasi', id)
        }
      //return
      return {
        destinasis,
        postDelete,
        id_user,
        getIdDestinasi
      };
    },
  };
  </script>
      <style>
  </style>