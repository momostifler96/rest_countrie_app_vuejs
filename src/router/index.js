import {createRouter,createWebHistory,createWebHashHistory} from "vue-router";
import TheWelcome from '../components/TheWelcome.vue'
import ApiRest from '../components/ApiRest.vue'
import Home from '../views/Home.vue'

const router = createRouter({

    history: createWebHashHistory(),

    routes:[
        
        {path:"/well",component:TheWelcome},
        {path:"/",component:Home},
        {path:"/api",component:ApiRest},
        {path:"/api/:title",component:ApiRest},
        
    ]
});

export default router;
