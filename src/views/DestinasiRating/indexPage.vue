<template>
    <!-- <link rel="stylesheet" href="https://allyoucan.cloud/cdn/icofont/1.0.1/icofont.css" integrity="sha384-jbCTJB16Q17718YM9U22iJkhuGbS0Gd2LjaWb4YJEZToOPmnKDjySVa323U+W7Fv" crossorigin="anonymous"> -->
    <div class="container">
        <div class="col-md-12">
            <div class="offer-dedicated-body-left">
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade active show" id="pills-reviews" role="tabpanel" aria-labelledby="pills-reviews-tab">
                        <div class="bg-white rounded shadow-sm p-4 mb-4 clearfix graph-star-rating">
                            <h5 class="mb-0 mb-4">Deskripsi Destinasi</h5>
                            <img :src="'http://localhost:8000/storage/users/'+destinasisShow.foto" alt="foto destinasi">
                            <h3>{{ destinasisShow.nama }}</h3>
                            <p>{{ destinasisShow.deskripsi }}</p>
                        </div>
                        
                        <div class="bg-white rounded shadow-sm p-4 mb-4 restaurant-detailed-ratings-and-reviews">
                            <h5 class="mb-1">All Ratings and Reviews</h5>
                            <div>
                                <router-link :to="{name: 'rating.create'}"><button class="btn btn-success">TAMBAH RATING</button></router-link>
                            </div>
                            <div v-for="(rating, id) in ratings" :key="id" >
                                <div v-for="(destinasi, id) in destinasis" :key="id">
                                    <div class="reviews-members pt-4 pb-4" v-if="rating.destinasi.id == destinasi.id">
                                        <div class="media">
                                            <!-- <div  v-if="rating.id_user == user.id"> -->
                                                <img alt="User Image" :src="'http://localhost:8000/storage/users/'+rating.user.image" class="mr-3 rounded-pill">
                                            <!-- </div> -->
                                            <div class="media-body">
                                                <div class="reviews-members-header">
                                                    <span class="star-rating float-right">
                                                        <a href="#"><i class="icofont-ui-rating active"></i></a>
                                                        <a href="#"><i class="icofont-ui-rating active"></i></a>
                                                        <a href="#"><i class="icofont-ui-rating active"></i></a>
                                                        <a href="#"><i class="icofont-ui-rating active"></i></a>
                                                        <a href="#"><i class="icofont-ui-rating"></i></a>
                                                        </span>
                                                    <h6 class="mb-1 text-black" style="font-size: 20px; font-family: sans-serif;">{{ rating.user.name }}</h6>
                                                    <p class="text-gray">Ini adalah total rating</p>
                                                </div>
                                                <div class="reviews-members-body">
                                                    <p>{{ rating.komentar }}</p>
                                                    <div v-if="id_user == rating.user.id">
                                                        <router-link :to="{ name: 'rating.edit' }"><button class="btn btn-primary" style="margin-right: 10px">Edit</button></router-link>
                                                        <button class="btn btn-danger" @click.prevent="postDelete(rating.id)">Delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { reactive, ref, onMounted } from 'vue'
    import { useRouter } from 'vue-router'
    import axios from 'axios'
    export default {
      setup() {
      //state departemen
        const ratingsModel = reactive({
          komentar: '',
          rating: '',
          id_destinasi: '',
          id_user: ''
        })
        const destinasisShow = reactive({
          nama: '',
          total_rating: '',
          deskripsi: '',
          foto: ''
        })
        let ratings = ref([]);
        let destinasis = ref([]);
        //state validation
        const validation = ref([])

        const config = {
          headers: {
            'content-type': 'multipart/form-data',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        }
        const URL_LINK = "http://127.0.0.1:8000/api/ratings"
  
        //vue router
        const router = useRouter()
        // const route = useRoute()
        const id_user = localStorage.getItem('user')
        const id_destinasi = localStorage.getItem('idDestinasi')
        ratingsModel.id_destinasi = id_destinasi
        ratingsModel.id_user = id_user
        console.log("Id user yang dibawa : " + id_user)
        console.log("Id destinasi yang dibawa : " + ratingsModel.id_destinasi)

        

        onMounted(() => {
        //get API from Laravel Backend
        axios.get(URL_LINK, config)
          .then((response) => {
            //assign state posts with response data
            ratingsModel.komentar = response.data.data.komentar;
            ratingsModel.rating = response.data.data.rating;
            ratings.value = response.data.data;
          })
          .catch((error) => {
            console.log(error.response.data);
          });
        
          axios.get(`http://127.0.0.1:8000/api/destinasis`, config)
          .then((response) => {
            //assign state posts with response data
            // usersModel.name = response.data.data.name,
            // usersModel.email = response.data.data.email,
            // usersModel.image = response.data.data.image,
            // usersModel.username = response.data.data.username
            destinasis.value = response.data.data
          })
          .catch((error) => {
            console.log(error.response.data);
          });

          axios.get(`http://127.0.0.1:8000/api/destinasis/${id_destinasi}`, config)
          .then((response) => {
            destinasisShow.nama = response.data.data.nama,
            destinasisShow.total_rating = response.data.data.total_rating,
            destinasisShow.deskripsi = response.data.data.deskripsi,
            destinasisShow.foto = response.data.data.foto
            console.log(destinasisShow.foto)
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
            ratings.value = response.data.data
            }).catch(error => {
            console.log(error.response.data)
            })
        }).catch(error => {
            console.log(error.response.data)
        })
        }
      //return
        return {
          ratings,
          validation,
          router,
          destinasis,
          id_user,
          postDelete,
          destinasisShow,
          id_destinasi
        }
      }
    }
</script>
<style>
    body{
background:#dcdcdc;    
}
.total-like-user-main a {
    display: inline-block;
    margin: 0 -17px 0 0;
}
.total-like {
    border: 1px solid;
    border-radius: 50px;
    display: inline-block;
    font-weight: 500;
    height: 34px;
    line-height: 33px;
    padding: 0 13px;
    vertical-align: top;
}
.restaurant-detailed-ratings-and-reviews hr {
    margin: 0 -24px;
}
.graph-star-rating-header .star-rating {
    font-size: 17px;
}
.progress {
    background: #f2f4f8 none repeat scroll 0 0;
    border-radius: 0;
    height: 30px;
}
.rating-list {
    display: inline-flex;
    margin-bottom: 15px;
    width: 100%;
}
.rating-list-left {
    height: 16px;
    line-height: 29px;
    width: 10%;
}
.rating-list-center {
    width: 80%;
}
.rating-list-right {
    line-height: 29px;
    text-align: right;
    width: 10%;
}
.restaurant-slider-pics {
    bottom: 0;
    font-size: 12px;
    left: 0;
    z-index: 999;
    padding: 0 10px;
}
.restaurant-slider-view-all {
    bottom: 15px;
    right: 15px;
    z-index: 999;
}
.offer-dedicated-nav .nav-link.active,
.offer-dedicated-nav .nav-link:hover,
.offer-dedicated-nav .nav-link:focus {
    border-color: #3868fb;
    color: #3868fb;
}
.offer-dedicated-nav .nav-link {
    border-bottom: 2px solid #fff;
    color: #000000;
    padding: 16px 0;
    font-weight: 600;
}
.offer-dedicated-nav .nav-item {
    margin: 0 37px 0 0;
}
.restaurant-detailed-action-btn {
    margin-top: 12px;
}
.restaurant-detailed-header-right .btn-success {
    border-radius: 3px;
    height: 45px;
    margin: -18px 0 18px;
    min-width: 130px;
    padding: 7px;
}
.text-black {
    color: #000000;
}
.icon-overlap {
    bottom: -23px;
    font-size: 74px;
    opacity: 0.23;
    position: absolute;
    right: -32px;
}
.menu-list img {
    width: 41px;
    height: 41px;
    object-fit: cover;
}
.restaurant-detailed-header-left img {
    width: 88px;
    height: 88px;
    border-radius: 3px;
    object-fit: cover;
    box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075)!important;
}
.reviews-members .media .mr-3 {
    width: 56px;
    height: 56px;
    object-fit: cover;
}
.rounded-pill {
    border-radius: 50rem!important;
}
.total-like-user {
    border: 2px solid #fff;
    height: 34px;
    box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075)!important;
    width: 34px;
}
.total-like-user-main a {
    display: inline-block;
    margin: 0 -17px 0 0;
}
.total-like {
    border: 1px solid;
    border-radius: 50px;
    display: inline-block;
    font-weight: 500;
    height: 34px;
    line-height: 33px;
    padding: 0 13px;
    vertical-align: top;
}
.restaurant-detailed-ratings-and-reviews hr {
    margin: 0 -24px;
}
.graph-star-rating-header .star-rating {
    font-size: 17px;
}
.progress {
    background: #f2f4f8 none repeat scroll 0 0;
    border-radius: 0;
    height: 30px;
}
.rating-list {
    display: inline-flex;
    margin-bottom: 15px;
    width: 100%;
}
.rating-list-left {
    height: 16px;
    line-height: 29px;
    width: 10%;
}
.rating-list-center {
    width: 80%;
}
.rating-list-right {
    line-height: 29px;
    text-align: right;
    width: 10%;
}
.restaurant-slider-pics {
    bottom: 0;
    font-size: 12px;
    left: 0;
    z-index: 999;
    padding: 0 10px;
}
.restaurant-slider-view-all {
    bottom: 15px;
    right: 15px;
    z-index: 999;
}

.progress {
    background: #f2f4f8 none repeat scroll 0 0;
    border-radius: 0;
    height: 30px;
}
</style>