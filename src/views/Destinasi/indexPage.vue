<template>
    <!-- <div
      class="
        d-flex
        justify-content-between
        flex-wrap flex-mdnowrap
        align-items-center
        pt-3
        pb-2
        mb-3
        border-bottom
      "
    >
      <h1 class="h2">Dashboard</h1>
    </div> -->
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-12">
          <div class="card border-0 rounded shadow">
            <div class="card-body">
              <router-link
                :to="{ name: 'destinasi.create' }"
                ><button class="btn btn-success">TAMBAH DESTINASI</button></router-link>
              <!-- <table class="table table-striped table-bordered mt4">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">NAMA DESTINASI</th>
                    <th scope="col">TOTAL RATING</th>
                    <th scope="col">DESKRIPSI</th>
                    <th scope="col">FOTO</th>
                    <th scope="col">AKSI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(destinasi, id) in destinasis" :key="id">
                    <td>{{ destinasi.nama }}</td>
                    <td>{{ destinasi.total_rating }}</td>
                    <td>{{ destinasi.deskripsi }}</td>
                    <td class="text-center">
                      <router-link :to="{ name:'destinasi.edit', params: { id: destinasi.id } }" class="btn btn-sm btn-primary mr-1">
                          EDIT
                      </router-link>
                      <button class="btn btn-sm btn-danger ml-1" style="margin-left:10px;" @click.prevent="destinasiDelete(destinasi.id)">DELETE</button>
                    </td>
                  </tr>
                </tbody>
              </table> -->
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
            <router-link :to="{name: 'planner.create', params: { id: destinasi.id }}"><button class="btn btn-primary" style="margin-right: 10px;">Tambah plan</button></router-link>
            <router-link :to="{name: 'destinasirating.index', params: { id: destinasi.id }}"><button class="btn btn-light">Read more</button></router-link>
            
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
      //return
      return {
        destinasis,
        postDelete,
        id_user
      };
    },
  };
  </script>
      <style>
  </style>