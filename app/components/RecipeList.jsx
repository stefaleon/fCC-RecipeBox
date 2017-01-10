const React = require('react');

const Recipe = require('Recipe');

const RecipeList = React.createClass({
    render: function () {
        var {recipes, onEdit, onDelete} = this.props;
        var renderRecipes = () => {
            var count = 0;
            return recipes.map((recipe) => {
                count += 1;
                return (
                    <Recipe
                        key={recipe.name}
                        {...recipe}
                        count={count}
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
