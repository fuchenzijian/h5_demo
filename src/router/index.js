import {createRouter,createWebHashHistory} from 'vue-router';
import Home from '../views/home/home.vue'
const routes = [
    { 
        path: '/', //路径
        redirect:'/home', //重定向 
    },
    { 
        path: '/home', 
        component: Home, 
    },
    { 
        path: '/login', 
        component: () => import('../views/userCenter/Login/Login.vue'), 
    },
    { 
        path: '/activityDetail', 
        component:() => import('../views/act/ActivityDetail.vue'),
    },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router =createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router;