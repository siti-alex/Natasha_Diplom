import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home";
import News from "../components/News";
// import NewsId from "../components/NewsId";
import NotFound from "../components/NotFound";
import NewsId from "../components/NewsId";
import Auth from "../components/Auth";
import EditNews from "../components/EditNews";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'news',
        component: News,
      },
      {
        path: 'news/:id',
        name: 'NewsId',
        component: NewsId,
      },
      {
        path: 'auth',
        name: 'Auth',
        component: Auth
      },
      {
        path: '/edit',
        name: 'EditNews',
        component: EditNews
      }
    ]
  },
  { path: "*", component: NotFound },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
