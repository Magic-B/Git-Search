import { createRouter, createWebHistory } from 'vue-router';
import ProfilePage from './pages/ProfilePage.vue';
import MainLayout from './pages/MainLayout.vue';
import MainPage from './pages/MainPage.vue';
import AuthorPage from './pages/AuthorPage';
import ProjectsPage from './pages/ProjectsPage';

// meta: {
//     enterClass: 'animate__animated animate__fadeInLeft',
//     leaveClass: 'animate__animated animate__fadeOutRight'
// }
const list = [
    '/',
    '/profile',
    '/author',
    '/projects'
]
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: '/',
        component: MainLayout,
        children: [
        {
            path: '',
            component: MainPage
        },
            {path: '/author',
            component: AuthorPage
        },
            {path: '/projects',
            component: ProjectsPage
        },
            {path: '/profile/:id',
            component: ProfilePage,
            name: 'Profile',
            props: true
        },
        ]
        },
    ]
})

router.beforeEach((to, from, next) => {
    const indexFrom = list.findIndex((object) => object == from.path)
    const indexTo = list.findIndex((object) => object == to.path)

    if (indexFrom < 0 || indexTo < 0) {
        from.meta.leaveClass = 'animate__animated animate__fadeOut'
        to.meta.enterClass = 'animate__animated animate__fadeIn'
    } else {
        if (indexFrom > indexTo) {
            from.meta.leaveClass = 'animate__animated animate__fadeOutRight'
            to.meta.enterClass = 'animate__animated animate__fadeInLeft'
        } else if (indexFrom < indexTo) {
            from.meta.leaveClass = 'animate__animated animate__fadeOutLeft'
            to.meta.enterClass = 'animate__animated animate__fadeInRight'
        }
    }

    next()
})
export default router;


// :enter-active-class="route.meta.enterClass"
// :leave-active-class="route.meta.leaveClass"