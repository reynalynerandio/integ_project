const { createApp, ref, onMounted, watch } = Vue;

const app = createApp({
    setup() {
        const content = ref("");
        const tasks = ref([])
        const id = ref(0);
        
        // This is a function for adding new task
        const addTask = () => {
            // Check if the content have a value
            if (content.value.length === 0) {
                alert("No value");
                return;
            }

            id.value += 1;

            // Add value to the task
            tasks.value.unshift({
                "id": id.value,
                "content": content.value,
                "isDone": false
            })
            content.value = ""
        }

        const removeTask = (taskId) => {
            console.log(taskId)
            tasks.value = tasks.value.filter(task => task.id != taskId);
        }

        return {
            content,
            addTask,
            tasks,
            removeTask
        }
    }
})

app.mount("#app");