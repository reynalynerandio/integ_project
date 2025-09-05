// Create the app instance first
const app = Vue.createApp({
  data() {
    return {
      currentView: "dashboard",
      tasks: [],
      showAddTaskModal: false,
      editingTask: null,
    };
  },
  methods: {
    handleViewChange(view) {
      console.log("Changing view to:", view);
      this.currentView = view;
    },
    addTask(task) {
      this.tasks.push({
        id: Date.now(),
        ...task,
        completed: false,
      });
      this.saveTasks();
      this.showAddTaskModal = false;
      this.editingTask = null;
    },
    updateTask(task) {
      const index = this.tasks.findIndex((t) => t.id === task.id);
      if (index !== -1) {
        this.tasks[index] = task;
        this.saveTasks();
      }
      this.showAddTaskModal = false;
      this.editingTask = null;
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
      this.saveTasks();
    },
    editTask(task) {
      this.editingTask = { ...task };
      this.showAddTaskModal = true;
    },
    saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    loadTasks() {
      const savedTasks = localStorage.getItem("tasks");
      if (savedTasks) {
        this.tasks = JSON.parse(savedTasks);
      }
    },
  },
  mounted() {
    this.loadTasks();
  },
});

// Register components after creating the app
app.component("sidebar", Sidebar);
app.component("add-task-modal", AddTaskModal);
app.component("tasks-view", TasksView);

// Mount the app
app.mount("#app");
