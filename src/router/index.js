import Vue from 'vue'
import Router from 'vue-router'
import menus from '@/config/menu-config'

Vue.use(Router)

const routes = []

menus.forEach((item) => {
    item.sub.forEach((sub) => {
        routes.push({
            path: `/${sub.componentName}`,
            name: sub.componentName,
            component: () => import(`@/components/${sub.componentName}`)
        })
    })
})

const router = new Router({ 
    mode: "hash",
    routes 
})

export default router;
