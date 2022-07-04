import React, { Component, Fragment } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { connect } from 'react-redux';
import { addProduct } from '../../actions';

class ProductModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            formData: {
                name: '',
                price: 0,
                quantity: 1,
                category: ''
            }
        }
    }

    toggleModal = () => this.setState({ showModal: !this.state.showModal });

    handleInputChange = (e) => {
        const { target: { value, name } } = e;
        this.setState({ formData: { ...this.state.formData, [name]: value } });
    }

    handleSubmit = () => {
        const data = this.state.formData;
        this.props.dispatch(addProduct(data));
        this.toggleModal();
    }

    render() {
        return (
            <Fragment>
                <Button variant="primary" onClick={this.toggleModal}>
                    Add Product
                </Button>
                <Modal show={this.state.showModal} onHide={this.toggleModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Name'
                                    name='name'
                                    onChange={this.handleInputChange}
                                    value={this.state.formData.name}
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type='number'
                                    name='price'
                                    placeholder='Price'
                                    value={this.state.formData.price}
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control
                                    type='number'
                                    name='quantity'
                                    placeholder='Quantity'
                                    value={this.state.formData.quantity}
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Category</Form.Label>
                                <Form.Select
                                    name='category'
                                    value={this.state.formData.category}
                                    onChange={this.handleInputChange}
                                >
                                    {
                                        this.props.categories.map(category => <option key={category} value={category}>{category}</option>)
                                    }
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.toggleModal}>Close</Button>
                        <Button variant="primary" onClick={this.handleSubmit}>Save</Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    categories: state.categories
})

export default connect(mapStateToProps)(ProductModal);