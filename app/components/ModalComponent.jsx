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

const ModalComponent = React.createClass({
    onSave: function () {
        if (this.props.modalAddOrEdit === 'Add') {
            this.props.onNewSave();
        } else if (this.props.modalAddOrEdit === 'Edit') {
            this.onEditSave();
        }
    },
    onEditSave: function () {
        var count = this.props.count;
        console.log("Modal component, onEditSave, count is:", count);
        this.props.onEditSave(count);
    },
    render: function () {
        var {name, ingredients, showModal, modalAddOrEdit, modalTitle, onNewSave, onClose} = this.props;

        return (
            <div>

                <Modal className="text-center" show={showModal} onHide={onClose}>

                    <Modal.Header closeButton>
                        <Modal.Title id="modalTitleId">{modalTitle}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <FormGroup id="nameFormGroupId">
                            <FormControl type="text" placeholder="Name"
                                defaultValue={name}
                                id="nameFormControlId"/>
                        </FormGroup>
                        <FormGroup id="ingredientsFormGroupId">
                            <FormControl type="textarea"
                                defaultValue={ingredients}
                                placeholder="Ingredients, separate by commas (,)"
                                id="ingredientsFormControlId"
                            />
                        </FormGroup>
                    </Modal.Body>

                    <Modal.Footer>
                        <div className="text-center">
                            <Button bsStyle="success" onClick={this.onSave}>
                                <Glyphicon glyph="save" /> Save </Button>
                            <Button onClick={onClose}> Close </Button>
                        </div>
                    </Modal.Footer>

                </Modal>

            </div>
        );
    }
});

module.exports = ModalComponent;
