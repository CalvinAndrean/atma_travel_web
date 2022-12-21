//import vue router
import {
    createRouter,
    createWebHistory
} from 'vue-router'
// import LandingPage from '@/components/LandingPage.vue'
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
                // path: '/destinasi/rating',
                // name: 'destinasirating.index',
                // component: DestinasiRatingIndex
            },
            {
                // path: '/profile',
                // name: 'profile.index',
                // component: ProfilePage
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