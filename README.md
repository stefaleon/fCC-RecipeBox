# fCC RecipeBox

### User Stories
* I can create recipes that have names and ingredients.
* I can see an index view where the names of all the recipes are visible.
* I can click into any of those recipes to view it.
* I can edit these recipes.
* I can delete these recipes.
* All new recipes I add are saved in my browser's local storage. If I refresh the page, these recipes will still be there.

### React Components
* *RecipeBox*: handles state, passes the recipes' data as props to the *RecipesList* component, as well as the *onEdit* and *onDelete* handlers.
* *RecipeList*: Passes each recipe's data as props to the *Recipe* component via the mapping *renderRecipes* function.
* *Recipe*: presents each recipe's name and passes data as props to the *Ingredients* component.
* *Ingredients*: presents the recipe's ingredients.


#### Basic React Boilerplate
* webpack -w -> makes bundle.js and monitors for changes
* node server -> starts server, locally on 3000

#### Dependencies
* Express
* React
* ReactDOM


#### devDependencies

* webpack
* babel-core
* babel-loader
* babel-preset-es2015
* babel-preset-react
* babel-preset-stage-0

#### front-end
* Bootstrap
