import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

const PasswordVerify = ({val}) => {
    // console.log(val)
    return (
        <ListGroup>  
            <ListGroup.Item
                variant={val.mismatch ? 'warning': 'success'}
                >Passwords must match</ListGroup.Item>
            <ListGroup.Item
                variant={val.sub12 ? 'warning': 'success'}
            >Password must be at least 12 characters.</ListGroup.Item>
            <ListGroup.Item
                variant={val.capital ? 'warning': 'success'}
            >Password must contain a capital letter</ListGroup.Item>
            <ListGroup.Item
                variant={val.lowercase ? 'warning': 'success'}
            >Password must contain a lowercase letter</ListGroup.Item>
            <ListGroup.Item
                variant={val.number ? 'warning': 'success'}
            >Password must contain a number</ListGroup.Item>
            <ListGroup.Item
                variant={val.symbol ? 'warning': 'success'}
            >Password must contain a symbol</ListGroup.Item>
        </ListGroup>
    );
}

export default PasswordVerify;
