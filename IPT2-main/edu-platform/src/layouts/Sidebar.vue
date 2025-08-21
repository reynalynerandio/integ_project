<script setup>
import { ref } from 'vue'

const pages = ref([
    {
        link: '/feed',
        label: 'Feed',
        icon: 'M8 17l4-4-4-4m8 8l-4-4 4-4',
    },
    {
        link: '/communities',
        label: 'Communities',
        icon: 'M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1M3 8a4 4 0 014-4 4 4 0 014 4v4a4 4 0 01-4 4 4 4 0 01-4-4V8zM17 8a4 4 0 00-4-4 4 4 0 00-4 4v4a4 4 0 004 4 4 4 0 004-4V8z',
    },
    {
        link: '/assignments',
        label: 'Assignments',
        icon: 'M9 12h6m2 4H7m4 4h2M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z',
    },
    {
        link: '/events',
        label: 'Events',
        icon: 'M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2V7H3v10a2 2 0 002 2z',
    },
    {
        link: '/chats',
        label: 'Chats',
        icon: 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z',
    },
])
</script>
<template>
    <!-- Left Sidebar -->
    <aside class="hidden lg:block lg:w-64 bg-white border-r border-gray-200 px-4 py-6 space-y-8">
        <div>
            <h3 class="text-lg font-semibold mb-4">Navigation</h3>
            <nav class="space-y-2">
                <router-link
                    v-for="(page, index) in pages"
                    :to="page.link"
                    :key="index"
                    class="flex items-center text-indigo-600 font-medium"
                >
                    <svg
                        class="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" :d="page.icon" />
                    </svg>
                    {{ page.label }}
                </router-link>
            </nav>
        </div>
        <!-- Communities list (mini) -->
        <div>
            <h3 class="text-lg font-semibold mb-4">Communities</h3>
            <ul class="space-y-3">
                <li class="flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                        <span
                            class="w-8 h-8 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold"
                            >CS</span
                        >
                        <span class="text-gray-700">Computer Science</span>
                    </div>
                    <button class="text-xs text-indigo-600 hover:underline">Join</button>
                </li>
                <li class="flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                        <span
                            class="w-8 h-8 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold"
                            >Math</span
                        >
                        <span class="text-gray-700">Mathematics</span>
                    </div>
                    <button class="text-xs text-indigo-600 hover:underline">Join</button>
                </li>
                <li class="flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                        <span
                            class="w-8 h-8 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold"
                            >Bio</span
                        >
                        <span class="text-gray-700">Biology Club</span>
                    </div>
                    <button class="text-xs text-indigo-600 hover:underline">Join</button>
                </li>
                <li class="flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                        <span
                            class="w-8 h-8 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold"
                            >Art</span
                        >
                        <span class="text-gray-700">Arts Society</span>
                    </div>
                    <button class="text-xs text-indigo-600 hover:underline">Join</button>
                </li>
            </ul>
        </div>
    </aside>
</template>
