import React, { Component } from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Product from '../product/Product';

class Category extends Component {
    getFilteredProducts = () => {
        const products = this.props.products.filter(prod => prod.category === this.props.selectedCategory);
        return products;
    }
    render() {
        const products = this.getFilteredProducts();
        return (
            <Container>
                <Link to="/">
                    <Button className='my-3'>
                        Back
                    </Button>
                </Link>
                <Row>
                {
                    products.map(product => (<Product key={product.id} data={product} />))
                }
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.products,
    selectedCategory: state.selectedCategory
});

export default connect(mapStateToProps)(Category);