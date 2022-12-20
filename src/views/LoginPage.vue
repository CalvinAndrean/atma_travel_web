<template>
    <div class="row justify-content-md-center">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">Login</div>
                <div class="card-body">
                    <form @submit.prevent = "login">
                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" v-model="users.email" class="form-control" placeholder="Email..">
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" v-model="users.password" class="form-control" placeholder="Password..">
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                        <!-- <router-link :to="{name: 'register'}" class="btn btn-md btn-primary">Log In</router-link> -->
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

            function login(){
                axios.post(`http://127.0.0.1:8000/api/login`, {
                    email: users.email,
                    password: users.password
                }).then((response) => {

                    // save token to local storage
                    localStorage.setItem('token', response.data.access_token)

                    console.log(localStorage.getItem('token'))

                    router.push({
                        name: 'Home',
                        params: {
                            type: "success",
                            text: "Berhasil Login"
                        },
                        
                    })

                })
                .catch(error => {
                    message.value = error.response.data.message
                    console.log(error.response.data.message)
               })
            }

            return {
                login,
                users,
                message,
                token
            }
        }
    }
</script>