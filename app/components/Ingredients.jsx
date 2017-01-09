const React = require('react');

const Ingredients = React.createClass({
    render: function () {
        var count = 0;
        var mappedIngredients = this.props.ingredients.map((ingredient) => {
            count += 1;
            return <div key={count}>{count}. {ingredient}</div>;
        });
        return (
             <div className="ingredient">
                 {mappedIngredients}
             </div>
         );
    },
});

module.exports = Ingredients;
