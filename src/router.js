//import vue router
import { createRouter, createWebHistory } from 'vue-router'
//define a routes
const routes = [{
    path: '/',
    name: 'beranda',
    component: () => import('@/components/DashboardLayout.vue'), children:[
        {
            path: "/destinasi",
            name: "destinasi.index",
            component: () =>
                import('@/views/Destinasi/indexPage.vue'),
        },
        {
            path: "/destinasi",
            name: "destinasi.create",
            component: () =>
                import('@/views/Destinasi/createPage.vue'),
        },
    ],
},
]
//create router
const router = createRouter({
    history: createWebHistory(),
    routes // config routes
})
export default router;