const React = require('react');
const ReactBootstrap = require('react-bootstrap');

const Button = ReactBootstrap.Button;
const Glyphicon = ReactBootstrap.Glyphicon;

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
                <Ingredients ingredients={ingredients} />
                <Button bsStyle="primary" onClick={this.onEdit}>
                    <Glyphicon glyph="edit" /> Edit Recipe </Button>
                <Button bsStyle="danger" onClick={this.onDelete}>
                    <Glyphicon glyph="trash" /> Delete Recipe </Button>
            </div>
        );
    }
});

module.exports = Recipe;
