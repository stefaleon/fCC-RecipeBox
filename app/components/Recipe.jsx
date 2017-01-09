const React = require('react');

const Ingredients = require('Ingredients');

const Recipe = React.createClass({
    onDelete: function () {
        this.props.onDelete(this.props.index);
    },
    render: function () {
        var {index, name, ingredients, onEdit, onDelete} = this.props;        
        return (
            <div className="recipe">
                <h4>Recipe #{index}</h4>
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
