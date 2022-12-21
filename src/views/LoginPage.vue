<template>
    <section class="vh-100">
        <div class="container py-5 h-100">
            <div class="row d-flex align-items-center justify-content-center h-100">
            <div class="col-md-8 col-lg-7 col-xl-6">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                class="img-fluid" alt="Phone image">
            </div>
            <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <form @submit.prevent="login">
                <!-- Email input -->
                <div class="form-outline mb-4">
                    <label class="form-label" for="form1Example13">Email address</label>
                    <input v-model="users.email" type="email" id="form1Example13" class="form-control form-control-lg" placeholder="Masukkan email"/>
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                    <label class="form-label" for="form1Example23">Password</label>
                    <input v-model="users.password" type="password" id="form1Example23" class="form-control form-control-lg" placeholder="Masukkan password" />
                </div>

                <!-- Submit button -->
                <button type="submit" class="btn btn-primary btn-lg btn-block" style="margin-right: 20px;">Login</button>
                <router-link :to="{ name: 'register' }"><button type="submit" class="btn btn-light btn-lg btn-block">Register</button></router-link>

                </form>
            </div>
            </div>
        </div>
    </section>
</template>

<script>
    import axios from 'axios'
    import { useRouter } from 'vue-router'
    import { reactive, ref } from "vue";

    export default {
        setup() {
            
            const users = reactive({
                email: '',
                password: ''
            })
            const token = ref('')
            const message = ref('')
            const router = useRouter()
            const validation = ref([])
            const URL_LINK = "https://vvwxx.com/api/backend-atma_travel/public/api"

            function login(){
                axios.post(`${URL_LINK}/login`, {
                    email: users.email,
                    password: users.password
                }).then((response) => {
                    // save token to local storage
                    localStorage.setItem('token', response.data.access_token)
                    localStorage.setItem('user', response.data.user.id)
                    // console.log(localStorage.getItem('token'))

                    router.push({
                        name: 'destinasi.index',
                        params: {
                            type: "success",
                            text: "Berhasil Login"
                        },
                    })
                })
                .catch(error => {
                    // alert(error.response.data.message)
                    alert(error.response.data.message)
                    message.value = error.response.data.message
                    validation.value = error.response.data.errors
               })
            }
            return {
                login,
                users,
                message,
                token,
                validation
            }
        }
    }
</script>

<style>
    .divider:after,
    .divider:before {
    content: "";
    flex: 1;
    height: 1px;
    background: #eee;
    }
</style>