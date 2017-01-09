const React = require('react');

const Ingredients = require('Ingredients');

const Recipe = React.createClass({
    render: function () {
        var {name, ingredients, onEdit, onDelete} = this.props;
        return (
            <div className="recipe">
                <h3>{name}</h3>
                <Ingredients ingredients={ingredients} />
                <button className="btn btn-primary" onClick={onEdit} id="on-edit">
                    Edit Recipe</button>
                <button className="btn btn-danger" onClick={onDelete} id="on-delete">
                    Delete Recipe</button>
            </div>
        );
    }
});

module.exports = Recipe;
