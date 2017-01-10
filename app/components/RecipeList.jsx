const React = require('react');
const ReactBootstrap = require('react-bootstrap');

const Accordion = ReactBootstrap.Accordion;
const Panel = ReactBootstrap.Panel;

const Recipe = require('Recipe');

const RecipeList = React.createClass({
    render: function () {
        var {recipes, onEdit, onDelete} = this.props;
        var renderRecipes = () => {
            var count = 0;
            return recipes.map((recipe) => {
                count += 1;
                return (
                    <Panel bsStyle="info" header={recipe.name} key={count} eventKey={count}>
                        <Recipe
                            key={count}
                            {...recipe}
                            count={count}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    </Panel>
                );
            });
        };
        return (
            <div className="recipelist-campers container-fluid">
                <Accordion>
                     {renderRecipes()}
                </Accordion>
            </div>
        );
    }
});

module.exports = RecipeList;
