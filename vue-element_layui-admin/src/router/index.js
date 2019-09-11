import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home.vue";
// import Main from "../components/Main.vue";
import Login from "../views/Login.vue";
import Reg from "../views/Reg.vue";
import ForgetPassword from "../views/ForgetPassword.vue";
import Template from "../views/demo_views/Template.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "登陆",
      component: Login
    },
    {
      path: "/reg",
      name: "注册",
      component: Reg
    },
    {
      path: "/forgetPassword",
      name: "忘记密码",
      component: ForgetPassword
    },
    {
      path: "/",
      name: "首页",
      component: Home,
      children: [
        {
          path: "/main",
          name: "主页面",
          component: Template
        },
        {
          path: "/userInfo-1-1",
          name: "用户详情-1-1",
          component: Template
        },
        {
          path: "/userInfo-1-2",
          name: "用户详情-1-2",
          component: Template
        },
        {
          path: "/userInfo-2-1",
          name: "用户详情-2-1",
          component: Template
        },
        {
          path: "/userInfo-2-2",
          name: "用户详情-2-2",
          component: Template
        },
        {
          path: "/userInfo-3-1",
          name: "用户详情-3-1",
          component: Template
        },
        {
          path: "/userInfo-3-2",
          name: "用户详情-3-2",
          component: Template
        },
        {
          path: "/userInfo/:id",
          name: "用户详情页",
          component: Template
        },
        {
          path: "/psd",
          name: "密码管理",
          component: Template
        },
        {
          path: "/salary",
          name: "工资管理",
          component: Template
        },
        {
          path: "/attendence",
          name: "考勤管理",
          component: Template
        },
        {
          path: "/perform",
          name: "绩效管理",
          component: Template
        },
        {
          path: "/admin",
          name: "系统管理",
          component: Template
        },
        {
          path: "/feedback",
          name: "意见反馈",
          component: Template
        }
      ]
    }
  ]
});
