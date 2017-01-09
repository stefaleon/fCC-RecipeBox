const React = require('react');

const Recipe = require('Recipe');

const RecipeList = React.createClass({
    render: function () {
        var {recipes, onEdit, onDelete} = this.props;
        var renderRecipes = () => {
            var index = 0;
            return recipes.map((recipe) => {
                index += 1;
                return (
                    <Recipe
                        key={recipe.name}
                        {...recipe}
                        index={index}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                );
            });
        };
        return (
            <div>
                <div className="recipelist-campers container-fluid">
                     {renderRecipes()}
                </div>
            </div>
        );
    }
});

module.exports = RecipeList;
