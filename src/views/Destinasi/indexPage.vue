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
                class="btn btn-md btn-success"
                >TAMBAH DESTINASI</router-link
              >
              <table class="table table-striped table-bordered mt4">
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
                    <td>{{ destinasi.foto }}</td>
                    <!-- <td class="text-center">
                      <router-link :to="{ name:'destinasi.edit', params: { id: destinasi.id } }" class="btn btn-sm btn-primary mr-1">
                          EDIT
                      </router-link>
                      <button class="btn btn-sm btn-danger ml-1" style="margin-left:10px;" @click.prevent="destinasiDelete(destinasi.id)">DELETE</button>
                    </td> -->
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
      <script>
  import axios from "axios";
  import { onMounted, ref } from "vue";
  export default {
    setup() {
      //reactive state
      let destinasis = ref([]);
      //mounted
      onMounted(() => {
        //get API from Laravel Backend
        axios.get("http://localhost:8000/api/destinasis")
          .then((response) => {
            //assign state posts with response data
            destinasis.value = response.data.data;
          })
          .catch((error) => {
            console.log(error.response.data);
          });
      });
  
      function destinasiDelete(id) {
              //delete data post by ID
              axios.delete(`http://localhost:8000/api/destinasis/${id}`)
              .then(() => {
                  //splice posts 
                  const index = this.destinasis.findIndex(destinasi => destinasi.id === id)
                  if (~index) {
                    // if the post exists in array
                    this.destinasis.splice(index, 1)
                  }
               }).catch(error => {
                   console.log(error.response.data)
               })
           
           }
      //return
      return {
        destinasis,
        destinasiDelete,
      };
    },
  };
  </script>
      <style>
  </style>