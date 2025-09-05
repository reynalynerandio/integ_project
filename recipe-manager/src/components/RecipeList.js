const RecipeList = {
    template: `
        <div class="recipe-list p-4">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2>My Recipes</h2>
                <button class="btn btn-primary" @click="showAddForm = true">
                    <i class="bi bi-plus"></i> Add Recipe
                </button>
            </div>

            <div class="row">
                <div v-for="recipe in recipes" :key="recipe.id" class="col-md-4 mb-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">{{ recipe.name }}</h5>
                            <p class="card-text">{{ recipe.description }}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <span class="badge bg-info">{{ recipe.mealType }}</span>
                                <div>
                                    <button class="btn btn-sm btn-outline-primary me-2" @click="viewRecipe(recipe)">
                                        <i class="bi bi-eye"></i>
                                    </button>
                                    <button class="btn btn-sm btn-outline-danger" @click="deleteRecipe(recipe.id)">
                                        <i class="bi bi-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Add Recipe Modal -->
            <div class="modal fade" :class="{ show: showAddForm }" v-if="showAddForm">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Add New Recipe</h5>
                            <button type="button" class="btn-close" @click="showAddForm = false"></button>
                        </div>
                        <div class="modal-body">
                            <form @submit.prevent="submitRecipe">
                                <div class="mb-3">
                                    <label class="form-label">Recipe Name</label>
                                    <input type="text" class="form-control" v-model="newRecipe.name" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Description</label>
                                    <textarea class="form-control" v-model="newRecipe.description" rows="3"></textarea>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Meal Type</label>
                                    <select class="form-select" v-model="newRecipe.mealType">
                                        <option value="Breakfast">Breakfast</option>
                                        <option value="Lunch">Lunch</option>
                                        <option value="Dinner">Dinner</option>
                                        <option value="Snack">Snack</option>
                                    </select>
                                </div>
                                <div class="text-end">
                                    <button type="button" class="btn btn-secondary me-2" @click="showAddForm = false">Cancel</button>
                                    <button type="submit" class="btn btn-primary">Save Recipe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    setup() {
        const { recipes, addRecipe, deleteRecipe } = Vue.inject('appState');
        const showAddForm = Vue.ref(false);
        const newRecipe = Vue.ref({
            name: '',
            description: '',
            mealType: 'Dinner'
        });

        const submitRecipe = () => {
            addRecipe(newRecipe.value);
            showAddForm.value = false;
            newRecipe.value = {
                name: '',
                description: '',
                mealType: 'Dinner'
            };
        };

        const viewRecipe = (recipe) => {
            // TODO: Implement recipe detail view
            console.log('View recipe:', recipe);
        };

        return {
            recipes,
            showAddForm,
            newRecipe,
            submitRecipe,
            deleteRecipe,
            viewRecipe
        };
    }
}; 