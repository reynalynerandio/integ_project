const MealPlanner = {
    template: `
        <div class="meal-planner p-4">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2>Meal Planner</h2>
                <button class="btn btn-primary" @click="showAddForm = true">
                    <i class="bi bi-plus"></i> Add to Plan
                </button>
            </div>

            <div class="row">
                <div v-for="day in days" :key="day" class="col-md-4 mb-4">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="mb-0">{{ day }}</h5>
                        </div>
                        <div class="card-body">
                            <div v-for="meal in getMealsForDay(day)" :key="meal.id" class="meal-item mb-3">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6 class="mb-0">{{ meal.meal }}</h6>
                                        <small class="text-muted">{{ meal.recipeName }}</small>
                                    </div>
                                    <button class="btn btn-sm btn-outline-danger" @click="removeFromPlan(meal.id)">
                                        <i class="bi bi-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Add to Plan Modal -->
            <div class="modal fade" :class="{ show: showAddForm }" v-if="showAddForm">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Add to Meal Plan</h5>
                            <button type="button" class="btn-close" @click="showAddForm = false"></button>
                        </div>
                        <div class="modal-body">
                            <form @submit.prevent="submitMealPlan">
                                <div class="mb-3">
                                    <label class="form-label">Day</label>
                                    <select class="form-select" v-model="newMealPlan.day">
                                        <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Recipe</label>
                                    <select class="form-select" v-model="newMealPlan.recipeId">
                                        <option v-for="recipe in recipes" :key="recipe.id" :value="recipe.id">
                                            {{ recipe.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Meal</label>
                                    <select class="form-select" v-model="newMealPlan.meal">
                                        <option value="Breakfast">Breakfast</option>
                                        <option value="Lunch">Lunch</option>
                                        <option value="Dinner">Dinner</option>
                                        <option value="Snack">Snack</option>
                                    </select>
                                </div>
                                <div class="text-end">
                                    <button type="button" class="btn btn-secondary me-2" @click="showAddForm = false">Cancel</button>
                                    <button type="submit" class="btn btn-primary">Add to Plan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    setup() {
        const { recipes, mealPlan, addToMealPlan, removeFromMealPlan } = Vue.inject('appState');
        const showAddForm = Vue.ref(false);
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const newMealPlan = Vue.ref({
            day: 'Monday',
            recipeId: '',
            meal: 'Dinner'
        });

        const getMealsForDay = (day) => {
            return mealPlan.value.filter(meal => meal.day === day);
        };

        const submitMealPlan = () => {
            if (newMealPlan.value.recipeId) {
                addToMealPlan(
                    newMealPlan.value.recipeId,
                    newMealPlan.value.day,
                    newMealPlan.value.meal
                );
                showAddForm.value = false;
                newMealPlan.value = {
                    day: 'Monday',
                    recipeId: '',
                    meal: 'Dinner'
                };
            }
        };

        const removeFromPlan = (id) => {
            removeFromMealPlan(id);
        };

        return {
            recipes,
            mealPlan,
            days,
            showAddForm,
            newMealPlan,
            getMealsForDay,
            submitMealPlan,
            removeFromPlan
        };
    }
}; 