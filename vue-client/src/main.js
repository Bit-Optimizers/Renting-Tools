import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

import App from "@/App.vue";

import Auth from "@/layouts/Auth.vue";

import Login from "@/views/auth/Login.vue";
import Signup from "@/views/auth/Signup.vue";
import profile from "@/views/Profile.vue";
import addtool from "@/views/AddTool.vue";
import Landing from "@/views/Landing.vue";
import LoginAdmin from "@/views/admin/LoginAdmin.vue";
import Users from "@/views/admin/Users.vue";
import Tools from "@/views/Tools.vue";
import Mytool from "@/views/Mytool.vue"
import Forgotpassword from "@/views/auth/Forgotpassword.vue"
import reset from"@/views/auth/Resetpassword.vue"

const routes = [
  {
    path: "/users",
    component: Users,
  },
  {
    path: "/admin/login",
    component: LoginAdmin,
  },

  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        component: Login,
      },
      {
        path: "/auth/signup",
        component: Signup,
      },
    ],
  },

  {
    path: "/",
    component: Landing,
  },
  {
    path: "/profile",
    component: profile,
  },
  {
    path: "/addtool",
    component: addtool,
  },
  {
    path: "/tools",
    component: Tools,
  },
  {
    path: "/mytools",
    component: Mytool,
  },
  {
    path: "/forgotpassword",
    component:Forgotpassword,
  },  {
    path: "/auth/resetpassword/:id",
    component:reset,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
