import React, { Component } from 'react'
import { Card, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { setKey } from '../../actions'
import { Link } from 'react-router-dom';

class CategoryCard extends Component {
    handleClick = () => {
        this.props.dispatch(setKey('selectedCategory', this.props.name));
    }

    render() {
        return (
            <Col>
                <Card className='mt-5'>
                    <Card.Body>
                        <Card.Title className='text-center p-1' onClick={this.handleClick}>
                            <Link to='/category'>
                                {this.props.name}
                            </Link>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default connect()(CategoryCard);