import React, { Component } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { connect } from 'react-redux';
import { removeProduct } from '../../actions';

class Product extends Component {
  handleDelete = (id) => {
    console.log(id);
    this.props.dispatch(removeProduct(id));
  }

  render() {
    return (
      <Col>
        <Card>
          <Card.Body>
            <Card.Text>
              Name: {this.props.data.name}<br />
              Price: {this.props.data.price}<br />
              Quantity: {this.props.data.quantity}<br />
              Category: {this.props.data.category}<br />
            </Card.Text>
            <Button variant="danger" onClick={() => this.handleDelete(this.props.data.id)}>Delete</Button>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default connect()(Product);