const IngredientList = {
    template: `
        <div class="ingredient-list p-4">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2>Ingredients</h2>
                <button class="btn btn-primary" @click="showAddForm = true">
                    <i class="bi bi-plus"></i> Add Ingredient
                </button>
            </div>

            <div class="table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Unit</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="ingredient in ingredients" :key="ingredient.id">
                            <td>{{ ingredient.name }}</td>
                            <td>{{ ingredient.category }}</td>
                            <td>{{ ingredient.quantity }}</td>
                            <td>{{ ingredient.unit }}</td>
                            <td>
                                <button class="btn btn-sm btn-outline-danger" @click="deleteIngredient(ingredient.id)">
                                    <i class="bi bi-trash"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Add Ingredient Modal -->
            <div class="modal fade" :class="{ show: showAddForm }" v-if="showAddForm">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Add New Ingredient</h5>
                            <button type="button" class="btn-close" @click="showAddForm = false"></button>
                        </div>
                        <div class="modal-body">
                            <form @submit.prevent="submitIngredient">
                                <div class="mb-3">
                                    <label class="form-label">Ingredient Name</label>
                                    <input type="text" class="form-control" v-model="newIngredient.name" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Category</label>
                                    <select class="form-select" v-model="newIngredient.category">
                                        <option value="Produce">Produce</option>
                                        <option value="Dairy">Dairy</option>
                                        <option value="Meat">Meat</option>
                                        <option value="Pantry">Pantry</option>
                                        <option value="Spices">Spices</option>
                                    </select>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label">Quantity</label>
                                        <input type="number" class="form-control" v-model="newIngredient.quantity" required>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label">Unit</label>
                                        <select class="form-select" v-model="newIngredient.unit">
                                            <option value="g">g</option>
                                            <option value="kg">kg</option>
                                            <option value="ml">ml</option>
                                            <option value="l">l</option>
                                            <option value="tsp">tsp</option>
                                            <option value="tbsp">tbsp</option>
                                            <option value="cup">cup</option>
                                            <option value="piece">piece</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="text-end">
                                    <button type="button" class="btn btn-secondary me-2" @click="showAddForm = false">Cancel</button>
                                    <button type="submit" class="btn btn-primary">Save Ingredient</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    setup() {
        const { ingredients, addIngredient } = Vue.inject('appState');
        const showAddForm = Vue.ref(false);
        const newIngredient = Vue.ref({
            name: '',
            category: 'Produce',
            quantity: 1,
            unit: 'g'
        });

        const submitIngredient = () => {
            addIngredient(newIngredient.value);
            showAddForm.value = false;
            newIngredient.value = {
                name: '',
                category: 'Produce',
                quantity: 1,
                unit: 'g'
            };
        };

        const deleteIngredient = (id) => {
            // TODO: Implement ingredient deletion
            console.log('Delete ingredient:', id);
        };

        return {
            ingredients,
            showAddForm,
            newIngredient,
            submitIngredient,
            deleteIngredient
        };
    }
}; 