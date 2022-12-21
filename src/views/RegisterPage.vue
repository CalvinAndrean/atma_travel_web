<template>
    <section class="vh-100">
        <div class="container py-5 h-100">
            <div class="row d-flex align-items-center justify-content-center h-100">
            <div class="col-md-8 col-lg-7 col-xl-6">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                class="img-fluid" alt="Phone image">
            </div>
            <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <form @submit.prevent="register">
                
                <div class="form-outline mb-4">
                    <label class="form-label" for="form1Example23">Name</label>
                    <input v-model="users.name" type="text" id="form1Example23" class="form-control form-control-lg" placeholder="Masukkan nama" />
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="form1Example23">Username</label>
                    <input v-model="users.username" type="text" id="form1Example23" class="form-control form-control-lg" placeholder="Masukkan username" />
                </div>

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
                <button type="submit" class="btn btn-primary btn-lg btn-block" style="margin-right: 20px;">Register</button>
                <router-link :to="{ name: 'beranda' }"><button type="submit" class="btn btn-light btn-lg btn-block">Login</button></router-link>

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
                name: '',
                email: '',
                password: '',
                username: '',
            })

            const router = useRouter()
            const validation = ref([])
            // const URL_LINK = "http://127.0.0.1:8000/api"

            function register(){
                axios.post(`https://vvwxx.com/api/backend-atma_travel/public/api/register`, {
                    name: users.name,
                    email: users.email,
                    password: users.password,
                    username: users.username,
                    image: users.image
                }).then(() => {
                    router.push({
                        name: "beranda",
                        params: {
                            type: "success",
                            text: "Berhasil Registrasi"
                        },
                    })
                }).catch((error) => {
                    alert(error.response.data.message)
                    validation.value = error.response.data.errors
                })
            }

            return {
                users,
                register,
                validation
            }

        }
        
    }
</script>