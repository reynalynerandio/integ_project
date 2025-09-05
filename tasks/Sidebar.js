const Sidebar = {
    template: `
        <div class="sidebar">
            <div class="logo">
                <span>📋</span>
                TaskFlow
            </div>
            <div 
                v-for="item in menuItems" 
                :key="item.id"
                class="nav-item"
                :class="{ active: currentView === item.id }"
                @click="changeView(item.id)"
            >
                <span>{{ item.icon }}</span>
                {{ item.name }}
            </div>
        </div>
    `,
    data() {
        return {
            menuItems: [
                { id: 'dashboard', name: 'Dashboard', icon: '📊' },
                { id: 'tasks', name: 'Tasks', icon: '📝' },
                { id: 'calendar', name: 'Calendar', icon: '📅' },
                { id: 'settings', name: 'Settings', icon: '⚙️' }
            ]
        }
    },
    props: {
        currentView: {
            type: String,
            required: true
        }
    },
    methods: {
        changeView(view) {
            this.$emit('view-change', view)
        }
    }
} 