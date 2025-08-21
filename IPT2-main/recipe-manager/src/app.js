const { createApp, ref, provide } = Vue;

// Create the app instance
const app = createApp({
    setup() {
        const currentView = ref('recipe-list');
        const recipes = ref([]);
        const ingredients = ref([]);
        const mealPlan = ref([]);

        const changeView = (view) => {
            currentView.value = view;
        };

        const addRecipe = (recipe) => {
            recipes.value.push({
                id: Date.now(),
                ...recipe,
                createdAt: new Date().toISOString()
            });
        };

        const deleteRecipe = (id) => {
            recipes.value = recipes.value.filter(recipe => recipe.id !== id);
        };

        const addIngredient = (ingredient) => {
            ingredients.value.push({
                id: Date.now(),
                ...ingredient
            });
        };

        const addToMealPlan = (recipeId, day, meal) => {
            const recipe = recipes.value.find(r => r.id === recipeId);
            if (recipe) {
                mealPlan.value.push({
                    id: Date.now(),
                    recipeId: recipe.id,
                    recipeName: recipe.name,
                    day,
                    meal
                });
            }
        };

        const removeFromMealPlan = (id) => {
            mealPlan.value = mealPlan.value.filter(meal => meal.id !== id);
        };

        // Provide the app state to all components
        provide('appState', {
            currentView,
            recipes,
            ingredients,
            mealPlan,
            changeView,
            addRecipe,
            deleteRecipe,
            addIngredient,
            addToMealPlan,
            removeFromMealPlan
        });

        return {
            currentView
        };
    }
});

// Register components
app.component('sidebar', Sidebar);
app.component('recipe-list', RecipeList);
app.component('ingredient-list', IngredientList);
app.component('meal-planner', MealPlanner);

// Mount the app
app.mount('#app'); 