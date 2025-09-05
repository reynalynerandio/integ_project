<script setup>
import { formatDistanceToNow } from 'date-fns'
import { ref } from 'vue'

const props = defineProps({
    post: { type: Object, required: true },
})

// Reactions
const reactionTypes = [
    { type: 'like', label: '👍', color: 'text-blue-600' },
    { type: 'love', label: '❤️', color: 'text-red-500' },
    { type: 'haha', label: '😂', color: 'text-yellow-500' },
    { type: 'wow', label: '😮', color: 'text-purple-500' },
    { type: 'sad', label: '😢', color: 'text-blue-400' },
    { type: 'angry', label: '😡', color: 'text-red-600' },
]

const userReaction = ref(null)
const reactions = ref(
    props.post.reactions || {
        like: 0,
        love: 0,
        haha: 0,
        wow: 0,
        sad: 0,
        angry: 0,
    },
)

function setReaction(type) {
    if (userReaction.value === type) {
        reactions.value[type]--
        userReaction.value = null
    } else {
        if (userReaction.value) reactions.value[userReaction.value]--
        reactions.value[type]++
        userReaction.value = type
    }
}
</script>

<template>
    <div class="bg-white rounded-lg shadow overflow-hidden max-w-5xl">
        <!-- Header -->
        <div class="p-4 flex items-start space-x-3">
            <img
                :src="post?.user?.photoUrl || '/default-avatar.png'"
                alt="User avatar"
                class="w-10 h-10 rounded-full object-cover"
            />
            <div class="flex-1">
                <div class="flex items-center justify-between">
                    <div>
                        <h4
                            @click="$emit('visitProfile', post.uid)"
                            class="font-semibold text-gray-800 cursor-pointer hover:underline"
                        >
                            {{
                                post?.user?.firstName || post?.user?.lastName
                                    ? post?.user?.firstName + ' ' + post?.user?.lastName
                                    : post.email
                            }}
                        </h4>
                        <span class="text-sm text-gray-500">
                            Posted
                            {{
                                formatDistanceToNow(post.createdAt?.toDate?.() || new Date(), {
                                    addSuffix: true,
                                })
                            }}
                        </span>
                    </div>
                    <button class="text-gray-400 hover:text-gray-600" aria-label="More options">
                        ⋮
                    </button>
                </div>
                <!-- Content -->
                <p class="mt-2 text-gray-700">
                    {{ post.content }}
                </p>

                <!-- Reactions / Actions -->
                <div class="mt-4 flex items-center space-x-6 text-gray-600">
                    <!-- Reaction -->
                    <div class="relative group">
                        <button class="flex items-center hover:text-indigo-600">
                            <span v-if="userReaction" class="mr-1">
                                {{ reactionTypes.find((r) => r.type === userReaction)?.label }}
                            </span>
                            <span>{{ userReaction || 'React' }}</span>
                            <span class="ml-1"> (1) </span>
                        </button>

                        <!-- Picker -->
                        <div
                            class="absolute bottom-full mb-2 left-0 bg-white shadow-lg rounded-full px-3 py-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition"
                        >
                            <button
                                v-for="r in reactionTypes"
                                :key="r.type"
                                @click="setReaction(r.type)"
                                class="text-xl hover:scale-125 transition"
                                :class="r.color"
                            >
                                {{ r.label }}
                            </button>
                        </div>
                    </div>

                    <!-- Comment -->
                    <button class="flex items-center hover:text-indigo-600">
                        💬 Comment ({{ post.comments?.length || 0 }})
                    </button>

                    <!-- Share -->
                    <button class="flex items-center hover:text-indigo-600">🔗 Share</button>
                </div>
            </div>
        </div>

        <!-- Comments -->
        <div v-if="post.comments?.length" class="bg-gray-50 border-t px-4 py-3 space-y-2">
            <div
                v-for="comment in post.comments.slice(0, 2)"
                :key="comment.id"
                class="flex space-x-3"
            >
                <img
                    :src="comment.user?.photoUrl || '/default-avatar.png'"
                    alt="Commenter"
                    class="w-8 h-8 rounded-full object-cover"
                />
                <div class="flex-1 bg-white p-2 rounded-md shadow">
                    <div class="flex justify-between items-center">
                        <span class="text-sm font-semibold">{{ comment.user?.name }}</span>
                        <span class="text-xs text-gray-500">{{ comment.time }}</span>
                    </div>
                    <p class="text-sm text-gray-700">{{ comment.text }}</p>
                </div>
            </div>
            <button v-if="post.comments.length > 2" class="text-sm text-indigo-600 hover:underline">
                View more comments
            </button>
        </div>
    </div>
</template>
