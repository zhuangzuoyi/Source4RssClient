import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import ShowDes from "./components/ShowDes"
import SubShow from "./components/SubShow"
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

function dynamicPropsFunc (route) {
      return {
        sub:  route.params.sub,
        title:  route.params.title
      }
    }


const routes = [
    {
        path: '/', redirect: '/SubShow'
    },
    {
        name:'subshow',
        path:"/SubShow",
        component: SubShow,
        props: {newsletterPopup: false}
    },
    {
        path:"/ShowDes",
        component: ShowDes
    }
]

var router =  new VueRouter({
    routes
})
export default router;