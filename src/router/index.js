import {createRouter,createWebHistory,createWebHashHistory} from "vue-router";
import TheWelcome from '../components/TheWelcome.vue'
import ApiRest from '../components/ApiRest.vue'
import Home from '../components/views/Home.vue'
import Option from '../components/views/Option.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {path:"/option",component:TheWelcome},
        {path:"/home",component:Home},
        {path:"/api",component:ApiRest},
        {path:"/",component:Option},

        {path:"/api/:title",component:ApiRest},
        
    ]
});

export default router;
