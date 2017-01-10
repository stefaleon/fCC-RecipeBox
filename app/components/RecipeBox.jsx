const React = require('react');
const ReactBootstrap = require('react-bootstrap');

const Panel = ReactBootstrap.Panel;
const Accordion = ReactBootstrap.Accordion;
const ListGroup = ReactBootstrap.ListGroup;
const ListGroupItem = ReactBootstrap.ListGroupItem;
const Button = ReactBootstrap.Button;
const Modal = ReactBootstrap.Modal;
const FormGroup = ReactBootstrap.FormGroup;
const FormControl = ReactBootstrap.FormControl;
const Glyphicon = ReactBootstrap.Glyphicon;

const RecipeList = require('RecipeList');
const ModalComponent = require('ModalComponent');

const RecipeBox = React.createClass({
    getInitialState: function () {
        var recipes = [
          {name: 'Omelet', ingredients: ['Eggs', 'Butter', 'Milk']},
          {name: 'Stuffed Peppers', ingredients: [ 'Green Peppers', 'Rice' ]},
          {name: 'Beansoup', ingredients: [ 'Beans', 'Onions', 'Carrots' ]}
        ];
        return ({
            recipes,
            showModal: false,
            modalAddOrEdit: 'Add'
        });
    },
    delete: function(count) {
        var index = count - 1;
        this.state.recipes.splice(index, 1);
        this.setState({recipes: this.state.recipes});
    },
    openToAdd: function() {
        this.setState({
            showModal: true,
            modalAddOrEdit: 'Add',
            name: '',
            ingredients: ''
        });
    },
    openToEdit: function(count, name, ingredients) {
        console.log('in RecipeBox, in openToEdit, count is:', count);
        console.log('in RecipeBox, in openToEdit, name is:', name);
        console.log('in RecipeBox, in openToEdit, ingredients is:', ingredients);
        this.setState({
            showModal: true,
            modalAddOrEdit: 'Edit',
            count,
            name,
            ingredients
        });
    },
    close: function() {
        this.setState({showModal: false});
    },
    newSave: function() {
        var name = document.getElementById("nameFormControlId").value;
        var ingredients = document.getElementById("ingredientsFormControlId").value.split(",");
        if (name.length === 0) {alert("Please enter a recipe name!");}
        else {
            this.state.recipes.push({name, ingredients});
            console.log("saving new recipe! recipes is now: ", this.state.recipes);
            this.close();
        }
    },
    editSave: function(count) {
        console.log('editSave fired! for count:', count);
        var index = count - 1;
        console.log('in editSave, index is:', index);
        var name = document.getElementById("nameFormControlId").value;
        var ingredients = document.getElementById("ingredientsFormControlId").value.split(",");
        if (name.length === 0) {alert("Please enter a recipe name!");}
        else {
            var editedRecipe = {name, ingredients};
            this.state.recipes.splice(index, 1, editedRecipe);
            console.log("saving edited recipe! recipes is now: ", this.state.recipes);
            this.close();
        }
    },
    render: function () {
        var {count, name, ingredients, recipes, showModal, modalAddOrEdit, currentIndex} = this.state;
        var title = (modalAddOrEdit === 'Add')? 'Add a Recipe' : 'Edit Recipe';
        return (
            <div>

                <h1>fCC RecipeBox</h1>

                <RecipeList
                    recipes={recipes}
                    onEdit={this.openToEdit}
                    onDelete={this.delete}
                />

                <Button bsStyle="success" onClick={this.openToAdd} id="add-new-recipe-button">
                    <Glyphicon glyph="plus" /> Add a Recipe
                </Button>

                <ModalComponent
                    count={count}
                    name={name}
                    ingredients={ingredients}
                    showModal={showModal}
                    modalAddOrEdit={modalAddOrEdit}
                    modalTitle={title}
                    onEditSave={this.editSave}
                    onNewSave={this.newSave}
                    onClose={this.close}
                />

            </div>
        );
    }
});

module.exports = RecipeBox;
