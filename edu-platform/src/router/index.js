import AppLayout from '@/layouts/AppLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/guest/LoginView.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('@/views/guest/RegisterView.vue'),
        },
        {
            path: '/dashboard',
            component: AppLayout,
            children: [
                {
                    path: '/feed',
                    name: 'feed',
                    component: () => import('@/views/authenticated/FeedView.vue'),
                },
                {
                    path: '/chats',
                    name: 'chats',
                    component: () => import('@/views/authenticated/ChatsView.vue'),
                },
                {
                    path: '/profile',
                    name: 'Profile',
                    component: () => import('@/views/authenticated/ProfileView.vue'),
                },
            ],
        },
    ],
})

export default router
