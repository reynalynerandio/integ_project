const TasksView = {
    template: `
        <div class="tasks-view">
            <div class="header">
                <h1>Tasks</h1>
                <button class="btn btn-primary" @click="$emit('add-task')">Add New Task</button>
            </div>

            <div class="tasks-filters">
                <div class="search-bar">
                    <input 
                        type="text" 
                        class="search-input" 
                        v-model="searchQuery" 
                        placeholder="Search tasks..."
                    >
                    <select v-model="categoryFilter" class="filter-select">
                        <option value="">All Categories</option>
                        <option v-for="category in categories" :key="category" :value="category">
                            {{ category }}
                        </option>
                    </select>
                    <select v-model="priorityFilter" class="filter-select">
                        <option value="">All Priorities</option>
                        <option value="high">High Priority</option>
                        <option value="medium">Medium Priority</option>
                        <option value="low">Low Priority</option>
                    </select>
                    <select v-model="statusFilter" class="filter-select">
                        <option value="all">All Status</option>
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
            </div>

            <div class="tasks-grid">
                <div v-for="task in filteredTasks" :key="task.id" class="task-card">
                    <div class="task-header">
                        <input 
                            type="checkbox" 
                            class="task-checkbox"
                            v-model="task.completed"
                            @change="$emit('task-update', task)"
                        >
                        <span class="priority-badge" :class="'priority-' + task.priority">
                            {{ task.priority }}
                        </span>
                    </div>
                    <h3 class="task-title">{{ task.title }}</h3>
                    <p class="task-description">{{ task.description }}</p>
                    <div class="task-meta">
                        <span class="task-category">{{ task.category }}</span>
                        <span class="due-date" :class="getDueDateClass(task.dueDate)">
                            📅 {{ formatDate(task.dueDate) }}
                        </span>
                    </div>
                    <div class="task-actions">
                        <button class="btn btn-edit" @click="$emit('edit-task', task)">Edit</button>
                        <button class="btn btn-danger" @click="$emit('delete-task', task.id)">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    `,
    props: {
        tasks: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            searchQuery: '',
            categoryFilter: '',
            priorityFilter: '',
            statusFilter: 'all'
        }
    },
    computed: {
        categories() {
            return [...new Set(this.tasks.map(task => task.category))]
        },
        filteredTasks() {
            return this.tasks.filter(task => {
                const matchesSearch = !this.searchQuery || 
                    task.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                    task.description.toLowerCase().includes(this.searchQuery.toLowerCase())
                
                const matchesCategory = !this.categoryFilter || 
                    task.category === this.categoryFilter
                
                const matchesPriority = !this.priorityFilter || 
                    task.priority === this.priorityFilter
                
                const matchesStatus = this.statusFilter === 'all' || 
                    (this.statusFilter === 'completed' && task.completed) ||
                    (this.statusFilter === 'pending' && !task.completed)
                
                return matchesSearch && matchesCategory && matchesPriority && matchesStatus
            })
        }
    },
    methods: {
        formatDate(date) {
            if (!date) return 'No due date'
            return new Date(date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            })
        },
        getDueDateClass(date) {
            if (!date) return ''
            const today = new Date()
            const dueDate = new Date(date)
            const diffDays = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24))
            
            if (diffDays < 0) return 'overdue'
            if (diffDays <= 3) return 'upcoming'
            return ''
        }
    }
} 