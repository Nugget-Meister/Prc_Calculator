import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router';

const Home = () => {
    let navigate = useNavigate()

    const [formData, setFormData] = useState({
        email:'',
        password:''
    })

    let handleChange = (e, invoke, source, debug) => {

        if(e.target.id == ""){
            console.log("Warning: ID not specified.")
        }

        if(!source){
            source = {}
        }

        if(debug === true){
            console.log({...source})
            console.log(e.target.id)
        }
        invoke({
            ...source,
            [e.target.id]: e.target.value
        })
    }


return (
    <Card>
        <Row>
            <Col>
                <Form>
                    Login to Account
                    <Form.Group>
                        <Form.Control 
                            className='rounded-pill bg-light m-2' 
                            value={formData.email}
                            id='email'
                            onChange={(e) => handleChange(e, setFormData, formData, true)}
                            placeholder='Email'/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            className='rounded-pill bg-light m-2' 
                            value={formData.password}
                            id='password'
                            onChange={(e) => handleChange(e, setFormData, formData, true)}
                            placeholder='Password'/>
                    </Form.Group>  
                </Form>
            
            </Col>
            <Col className=''>
                <Card.Title>No account?</Card.Title>
                <Button onClick={()=>{navigate('/signup')}}>Sign Up</Button>
            </Col>
        </Row>
    </Card>
);
}

export default Home;
