const React = require('react');
const ReactBootstrap = require('react-bootstrap');

const ListGroup = ReactBootstrap.ListGroup;
const ListGroupItem = ReactBootstrap.ListGroupItem;

const Ingredients = React.createClass({
    render: function () {
        var count = 0;
        var mappedIngredients = this.props.ingredients.map((ingredient) => {
            count += 1;
            return (<div key={count}>
                    <ListGroupItem>{count}. {ingredient}</ListGroupItem>
                </div>);
        });
        return ( <ListGroup> {mappedIngredients} </ListGroup> );
    },
});

module.exports = Ingredients;
