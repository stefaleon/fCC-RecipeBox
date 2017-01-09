const React = require('react');

const AddRecipe = React.createClass({
    // getInitialState: function () {
    //     return { showModal: false };
    // },
    // close: function() {
    //     this.setState({ showModal: false });
    //     tempName = "";
    //     tempIngredients = [];
    // },
    // open: function() {
    //     this.setState({ showModal: true });
    // },
    // save: function() {
    //     var name = document.getElementById("nameFormControlId").value;
    //     var ingredients = document.getElementById("ingredientsFormControlId").value.split(",");
    //     if (name.length === 0){alert("Please enter a recipe name!");}
    //     else {
    //     recipesArray.push( { recipeName: name, recipeIngredients: ingredients } );
    //     console.log("saving new recipe! recipesArray is now: ", recipesArray);
    //     renderRecipes();
    //     this.close();
    //     }
    // },
    render: function() {
        console.log("rendering AddRecipe");

        return (
            <div>
                <button className="btn btn-success" onClick={this.open} id="add-recipe">
                    Add a Recipe</button>
            </div>
       );
   }
});


module.exports = AddRecipe;
