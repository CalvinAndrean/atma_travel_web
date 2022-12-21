<template>
    <div class="row justify-content-md-center">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">
                    Register
                </div>
                <div class="card-body">
                    <form @submit.prevent = "register">
                        <div class="form-group mb-3">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" 
                            v-model="users.name"
                            placeholder="Name..">
                        </div>
                        <div class="form-group mb-3">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" 
                            v-model="users.email"
                            placeholder="Email..">
                        </div>
                        <div class="form-group mb-3">
                            <label for="password">Password</label>
                            <input type="password" 
                            v-model="users.password"
                            class="form-control" placeholder="Password..">
                        </div>
                        <div class="form-group mb-3">
                            <label for="username">Username</label>
                            <input type="text" class="form-control" 
                            v-model="users.username" placeholder="Username">
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
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
                name: '',
                email: '',
                password: '',
                username: '',
            })

            const router = useRouter()
            const validation = ref([])
            // const URL_LINK = "http://127.0.0.1:8000/api"

            function register(){
                axios.post(`http://127.0.0.1:8000/api/register`, {
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
                    console.log(error)
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