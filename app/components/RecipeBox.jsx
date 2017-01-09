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
const Tooltip = ReactBootstrap.Tooltip;
const OverlayTrigger = ReactBootstrap.OverlayTrigger;
const Glyphicon = ReactBootstrap.Glyphicon;

const RecipeList = require('RecipeList');

const RecipeBox = React.createClass({
    getInitialState: function () {
        var recipes = [
          {name: 'Omelet', ingredients: ['Eggs', 'Butter', 'Milk']},
          {name: 'Stuffed Peppers', ingredients: [ 'Green Peppers', 'Rice' ]},
          {name: 'Beansoup', ingredients: [ 'Beans', 'Onions', 'Carrots' ]}
        ];
        return ({
            recipes,
            showModal: false
        });
    },
    handleDelete: function(index) {
        this.state.recipes.splice((index-1), 1);
        this.setState({recipes: this.state.recipes});
    },
    handleEdit: function() {
        console.log('time to handle edit');
    },
    open: function() {
        this.setState({ showModal: true });
    },
    close: function() {
        this.setState({ showModal: false });
    },
    save: function() {
        var name = document.getElementById("nameFormControlId").value;
        var ingredients = document.getElementById("ingredientsFormControlId").value.split(",");
        if (name.length === 0) {alert("Please enter a recipe name!");}
        else {
            this.state.recipes.push({name, ingredients});
            console.log("saving new recipe! recipes is now: ", this.state.recipes);
            this.close();
        }
    },
    render: function () {
        var {recipes, showModal} = this.state;
        return (
            <div>

                <h1>fCC RecipeBox</h1>

                <RecipeList recipes={recipes}
                    onEdit={this.handleEdit}
                    onDelete={this.handleDelete}
                />

                <Button bsStyle="success" onClick={this.open} id="add-or-edit">
                    <Glyphicon glyph="plus" /> Add a Recipe
                </Button>

                <Modal className="text-center" show={showModal} onHide={this.close}>

                    <Modal.Header closeButton>
                        <Modal.Title id="modalTitle">Add a Recipe</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <FormGroup id="nameFormGroupId">
                            <FormControl type="text" placeholder="Name" id="nameFormControlId" />
                        </FormGroup>
                        <FormGroup id="ingredientsFormGroupId">
                            <FormControl type="textarea"
                                placeholder="Ingredients, separate by commas (,)"
                                id="ingredientsFormControlId"
                            />
                        </FormGroup>
                    </Modal.Body>

                    <Modal.Footer>
                        <div className="text-center">
                            <Button bsStyle="success" onClick={this.save}>
                                <Glyphicon glyph="save" /> Save</Button>
                            <Button onClick={this.close}>Close</Button>
                        </div>
                    </Modal.Footer>

                </Modal>

            </div>
        );
    }
});

module.exports = RecipeBox;
