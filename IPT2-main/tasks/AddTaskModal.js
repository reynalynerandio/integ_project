const AddTaskModal = {
    template: `
        <div class="modal-overlay" @click="$emit('close')">
            <div class="modal-content" @click.stop>
                <div class="modal-header">
                    <h2>{{ task ? 'Edit Task' : 'Add New Task' }}</h2>
                    <button class="close-btn" @click="$emit('close')">&times;</button>
                </div>
                
                <form @submit.prevent="handleSubmit" class="task-form">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input 
                            type="text" 
                            id="title" 
                            v-model="formData.title" 
                            required
                            placeholder="Enter task title"
                        >
                    </div>
                    
                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea 
                            id="description" 
                            v-model="formData.description" 
                            rows="3"
                            placeholder="Enter task description"
                        ></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="category">Category</label>
                        <input 
                            type="text" 
                            id="category" 
                            v-model="formData.category" 
                            placeholder="Enter task category"
                        >
                    </div>
                    
                    <div class="form-group">
                        <label for="priority">Priority</label>
                        <select id="priority" v-model="formData.priority" required>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="dueDate">Due Date</label>
                        <input 
                            type="date" 
                            id="dueDate" 
                            v-model="formData.dueDate"
                        >
                    </div>
                    
                    <div class="form-actions">
                        <button type="button" class="btn btn-secondary" @click="$emit('close')">Cancel</button>
                        <button type="submit" class="btn btn-primary">Save Task</button>
                    </div>
                </form>
            </div>
        </div>
    `,
    props: {
        task: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            formData: {
                title: 'arcr5',
                description: '',
                category: '',
                priority: 'medium',
                dueDate: ''
            }
        }
    },
    watch: {
        task: {
            immediate: true,
            handler(newTask) {
                if (newTask) {
                    this.formData = { ...newTask }
                } else {
                    this.formData = {
                        title: '',
                        description: '',
                        category: '',
                        priority: 'medium',
                        dueDate: ''
                    }
                }
            }
        }
    },
    methods: {
        handleSubmit() {
            this.$emit('save', { ...this.formData })
        }
    }
} 