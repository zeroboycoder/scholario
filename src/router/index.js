import * as VueRouter from "vue-router";
import HomePage from "../pages/HomePage.vue";
import MentorPage from "../pages/MentorPage.vue";
import ResourcePage from "../pages/ResourcePage.vue";
import ProfilePage from "../pages/ProfilePage.vue";

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/mentors",
            name: "mentors",
            component: MentorPage,
        },
        {
            path: "/resources",
            name: "resources",
            component: ResourcePage,
        },
        {
            path: "/profile",
            name: "profile",
            component: ProfilePage,
        },
    ],
});

router.beforeEach((to, from, next) => {
    const nextPath = to.path;
    if (to.path === nextPath) {
        next();
    } else {
        next(nextPath);
    }
});

export default router;
