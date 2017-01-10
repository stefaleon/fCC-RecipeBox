# fCC RecipeBox

### User Stories
* I can create recipes that have names and ingredients.
* I can see an index view where the names of all the recipes are visible.
* I can click into any of those recipes to view it.
* I can edit these recipes.
* I can delete these recipes.
* All new recipes I add are saved in my browser's local storage. If I refresh the page, these recipes will still be there.
* Hint:  You should prefix your local storage keys on CodePen, i.e. _username_recipes

### React Components
* *RecipeBox*: handles state, passes the recipes' data as props to the *RecipesList* component, as well as the *onEdit* and *onDelete* props that correspond to the editing and deleting handlers. Also passes many props to the modal component, for various properties and event handlers.
* *RecipeList*: Passes each recipe's data as props to the *Recipe* component via the mapping *renderRecipes* function.
* *Recipe*: presents each recipe's name and passes data as props to the *Ingredients* component.
* *Ingredients*: presents the recipe's ingredients.
* *ModalComponent*: presents the modal which is used in order to add or edit a recipe.


#### Basic React Boilerplate
* webpack -w -> makes bundle.js and monitors for changes
* node server -> starts server, locally on 3000

#### Dependencies
* Express
* React
* ReactDOM
* React-Bootstrap


#### devDependencies

* webpack
* babel-core
* babel-loader
* babel-preset-es2015
* babel-preset-react
* babel-preset-stage-0

#### front-end
* Bootstrap
