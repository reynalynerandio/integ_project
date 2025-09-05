const Sidebar = {
    template: `
        <div class="sidebar bg-light h-100 p-3">
            <h3 class="mb-4">Recipe Manager</h3>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a href="#" @click.prevent="changeView('recipe-list')" 
                       :class="['nav-link', { active: currentView === 'recipe-list' }]">
                        <i class="bi bi-book"></i> Recipes
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" @click.prevent="changeView('ingredient-list')" 
                       :class="['nav-link', { active: currentView === 'ingredient-list' }]">
                        <i class="bi bi-basket"></i> Ingredients
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" @click.prevent="changeView('meal-planner')" 
                       :class="['nav-link', { active: currentView === 'meal-planner' }]">
                        <i class="bi bi-calendar"></i> Meal Planner
                    </a>
                </li>
            </ul>
        </div>
    `,
    setup() {
        const { currentView, changeView } = Vue.inject('appState');
        return { currentView, changeView };
    }
}; 