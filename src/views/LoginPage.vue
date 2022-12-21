<template>
    <div class="row justify-content-md-center">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">Login</div>
                <div class="card-body">
                    <form @submit.prevent = "login">
                        <div class="form-group mb-3">
                            <label for="email">Email address</label>
                            <input type="email" v-model="users.email" class="form-control" placeholder="Email..">
                            <!-- validation -->
                            <div v-if="validation.email" class="mt-2 alert alert-danger">
                                {{ validation.email}}
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" v-model="users.password" class="form-control" placeholder="Password..">
                        </div>
                        <div class="mt-4">
                            <button type="submit" class="btn btn-primary me-4 ms-5">Submit</button>
                            <router-link :to="{name: 'register'}" class="btn btn-md btn-primary">Register</router-link>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
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
            const URL_LINK = "http://127.0.0.1:8000/api"

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
                        name: 'Home',
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