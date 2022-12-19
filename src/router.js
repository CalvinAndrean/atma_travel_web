//import vue router
import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/components/LandingPage.vue'
import DashboardLayout from '@/components/DashboardLayout.vue'
import DestinasiIndex from '@/views/Destinasi/indexPage.vue'
import DestinasiCreate from '@/views/Destinasi/createPage.vue'
import DestinasiEdit from '@/views/Destinasi/editPage.vue'

//define a routes
const routes = [
    {
        path: '/',
        name: 'beranda',
        component: LandingPage
    },
    {
        path: '/Home',
        name: 'Home',
        component: DashboardLayout, children: [
            {
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