<template>
    <div class="page-holder" style="background-color: rgb(235, 226, 225)">
          <div class="container-fluid px-lg-4 px-xl-5 contentDiv">
                <!-- Page Header-->
                <div class="page-header mb-4">
                  <h1 class="page-heading">Profile</h1>
                </div>
            <section>
              <div class="row">
                <div class="col-lg-4">
                  <div class="card card-profile mb-4">
                    <div class="card-header" style="background-image: url(https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img1.jpg);"> </div>
                    <div class="card-body text-center">
                        <img class="card-profile-img" :src="'http://localhost:8000/storage/users/'+users.image" alt="Image">
                        <h3 class="mb-3">{{ users.name }}</h3>
                        <p class="mb-4">Beginner Traveler</p>
                        <p style="margin-top: -25px;">
                            <span class="fa fa-plane" style="margin-right: 5px;"></span>
                            <span class="fa fa-train" style="margin-right: 5px;"></span>
                            <span class="fa fa-car" style="margin-right: 5px;"></span>
                        </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-8">
                  <form class="card mb-4" @submit.prevent="update" enctype="multipart/form-data">
                    <div class="card-header">
                      <h4 class="card-heading">Edit Profile</h4>
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mb-4">
                            <label class="form-label">Name</label>
                            <input class="form-control" 
                            type="text" 
                            placeholder="Name"
                            v-model="users.name">
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-6">
                          <div class="mb-4">
                            <label class="form-label">Username</label>
                            <input class="form-control" 
                            type="text" 
                            placeholder="Username"
                            v-model="users.username">
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-6">
                          <div class="mb-4">
                            <label class="form-label">Email address</label>
                            <input class="form-control" 
                            type="email" 
                            placeholder="Email"
                            v-model="users.email">
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-6">
                          <div class="mb-4">
                            <label class="form-label">Password</label>
                            <input class="form-control" 
                            type="text" 
                            v-model="users.password"
                            placeholder="Password">
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-6">
                          <!-- <div class="mb-4">
                            <input 
                            type="file"
                            id="file"
                            ref="file"
                            @change="handleFileUpload()"
                            class="form-control" 
                            placeholder="Masukkan foto">
                            </div> -->
                        </div>
                      </div>
                    </div>
                    <div class="card-footer text-end">
                      <button class="btn btn-primary" type="submit">Update Profile</button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
          <footer class="footer bg-white shadow align-self-end py-3 px-xl-5 w-100">
            <div class="container-fluid">
              <div class="row">
              </div>
            </div>
          </footer>
        </div>
  
      
  </template>
  
<script>
    import axios from "axios";
    import { useRouter } from 'vue-router'
  import { onMounted, reactive, ref } from "vue";
  export default {
    setup() {
      //reactive state
      const users = reactive({
        name: '',
        username: '',
        email: '',
        image: '',
        password: ''
      })
      //mounted
    //   const route = useRoute()
      const router = useRouter()
    // const validation = ref([])
    // const route = useRoute()
    const file = ref(null)
    const handleFileUpload = async() => {
        // debugger;
        console.log("selected file",file.value.files)
        //Upload to server
    }
      const id = localStorage.getItem('user')
      console.log(id)

      const config = {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
      }

      const URL_LINK = `http://127.0.0.1:8000/api/users`

      onMounted(() => {
        //get API from Laravel Backend
        axios.get(`${URL_LINK}/${id}`, config)
          .then((response) => {
            //assign state posts with response data
            users.name = response.data.data.name,
            console.log(users.name)
            users.email = response.data.data.email,
            console.log(users.email)
            users.image = response.data.data.image,
            users.username = response.data.data.username
            console.log(users.username)
          })
          .catch((error) => {
            console.log(error.response.data);
          });
      });

      // function update() {
      //   const config = {
      //     headers: {
      //       'Authorization': 'Bearer ' + localStorage.getItem('token')
      //     }
      //   }
      //   let data = new FormData();
      //   data.append('image', file.value.files[0]);
      //   data.append('name', users.name);
      //   data.append('username', users.username);
      //   data.append('email', users.email);
      //   // console.log(users.email)
      //   data.append('password', users.password);
      //   console.log(file.value.files[0])
      //   axios.put(`${URL_LINK}/${id}`, data, config)
      //   .then(() => {
      //   //redirect ke post index
      //     router.push({
      //       name: 'profile'
      //     })
      //   }).catch(error => {
      //   //assign state validation with error
      //     validation.value = error.response.data
      //     console.log(validation.value)
      //   })
      // }

      function update() {
        let name = users.name
        let username = users.username
        let email = users.email
        let password = users.password
        axios.post(`${URL_LINK}/${id}`, {
          name: name,
          username: username,
          email: email,
          password: password,

        }, config).then(() => {
          alert("Data berhasil di update")
          router.push({
            name: 'profile',
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
        users,
        update,
        handleFileUpload,
      };
    },
  };
</script>