const React = require('react');

const RecipeList = require('RecipeList');

const RecipeBox = React.createClass({
    getInitialState: function () {
        var recipes = [
          {name: 'Omelet', ingredients: ['Eggs', 'Butter', 'Milk']},
          {name: 'Stuffed Peppers', ingredients: [ 'Green Peppers', 'Rice' ]},
          {name: 'Beansoup', ingredients: [ 'Beans', 'Onions', 'Carrots' ]}
        ];
        return { recipes }
    },
    componentDidMount: function () {
        console.log('recipeboxDidMount');
    },
    handleDelete: function(index) {
        this.state.recipes.splice((index-1), 1);
        this.setState({recipes: this.state.recipes});
    },
    handleEdit: function() {
        console.log('time to handle edit');
    },
    render: function () {
        var {recipes} = this.state;
        return (
            <div>
                <h1>fCC RecipeBox</h1>
                <RecipeList recipes={recipes}
                    onEdit={this.handleEdit}
                    onDelete={this.handleDelete}
                    />
            </div>
        );
    }
});

module.exports = RecipeBox;
