//import vue router
import {
    createRouter,
    createWebHistory
} from 'vue-router'
// import LandingPage from '@/components/LandingPage.vue'
import DestinasiRatingIndex from '@/views/DestinasiRating/indexPage.vue'
import Profile from '@/views/Profile/ProfilePage.vue'
import DashboardLayout from '@/components/DashboardLayout.vue'
import DestinasiIndex from '@/views/Destinasi/indexPage.vue'
import DestinasiCreate from '@/views/Destinasi/createPage.vue'
import DestinasiEdit from '@/views/Destinasi/editPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import PlannerIndex from '@/views/Planner/indexPage.vue'
import PlannerCreate from '@/views/Planner/createPage.vue'
import PlannerEdit from '@/views/Planner/editPage.vue'
import LogoutPage from '@/views/LogoutPage.vue'
// import DestinasiRatingIndex from '@views/DestinasiRating/indexPage.vue'
// import ProfilePage from '@views/Profile/ProfilePage.vue'
import RatingCreate from '@/views/Rating/createPage.vue'
import RatingEdit from '@/views/Rating/editPage.vue'


//define a routes
const routes = [{
        path: '/',
        name: 'beranda',
        component: LoginPage
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterPage
    },
    {
        path: '/logout',
        name: 'logout',
        component: LogoutPage
    },
    {
        path: '/home',
        name: 'Home',
        component: DashboardLayout,
        children: [{
                path: '/destinasi',
                name: 'destinasi.index',
                component: DestinasiIndex
            },
            {
                path: '/destinasi/create',
                name: 'destinasi.create',
                component: DestinasiCreate
            },
            {
                path: '/destinasi/edit:id',
                name: 'destinasi.edit',
                component: DestinasiEdit
            },
            {
                path: '/planner/edit:id',
                name: 'planner.edit',
                component: PlannerEdit
            },
            {
                path: '/planner/index',
                name: 'planner.index',
                component: PlannerIndex
            },
            {
                path: '/planner/create',
                name: 'planner.create',
                component: PlannerCreate
            },
            {
                path: '/profile',
                name: 'profile',
                component: Profile
            },
            {
                path: '/destinasi/rating',
                name: 'destinasirating.index',
                component: DestinasiRatingIndex
            },
            {
                path: '/destinasi/rating/create',
                name: 'rating.create',
                component: RatingCreate
            },
            {
                path: '/destinasi/rating/edit',
                name: 'rating.edit',
                component: RatingEdit
            }
        ]
    }
]
//create router
const router = createRouter({
    history: createWebHistory(),
    routes // config routes
})
export default router;