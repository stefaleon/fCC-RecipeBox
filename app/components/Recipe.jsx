const React = require('react');

const Ingredients = require('Ingredients');

const Recipe = React.createClass({
    onDelete: function () {
        this.props.onDelete(this.props.count);
    },
    onEdit: function () {
        var {count, name, ingredients} = this.props;
        console.log("Recipe component, onEdit, count is:", count);
        this.props.onEdit(count, name, ingredients);
    },
    render: function () {
        var {count, name, ingredients, onEdit, onDelete} = this.props;
        return (
            <div className="recipe">
                <h4>Recipe #{count}</h4>
                <h3>{name}</h3>
                <Ingredients ingredients={ingredients} />
                <button className="btn btn-primary" onClick={this.onEdit} id="on-edit">
                    Edit Recipe</button>
                <button className="btn btn-danger" onClick={this.onDelete} id="on-delete">
                    Delete Recipe</button>
            </div>
        );
    }
});

module.exports = Recipe;
