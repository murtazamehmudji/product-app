import React, { Component } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import ProductModal from '../product/ProductModal'
import CategoryCard from './CategoryCard'

class Home extends Component {
    render() {
        return (
            <Container>
                <ProductModal></ProductModal>
                <Row>
                    {
                        Array.isArray(this.props.categories)
                            ? this.props.categories.map(cat => <CategoryCard key={cat} name={cat} />)
                            : null
                    }
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    categories: state.categories
})

export default connect(mapStateToProps)(Home);