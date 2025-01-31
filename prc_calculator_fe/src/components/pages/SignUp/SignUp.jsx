import React, { useRef, useState } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form'
import CardGroup from 'react-bootstrap/CardGroup'
import { validatePassword } from '../../common/passwords';
import PasswordVerify from '../../common/PasswordVerify/PasswordVerify';
import { registerUser } from '../../common/apicalls';

const SignUp = () => {
    let formRef = useRef({
        email: '',
        password: '',
        repeat:''
    })

    const [formData, setFormData] = useState(formRef)

    let passwordCheck = validatePassword(formRef.current.password,formRef.current.repeat)

    let handleChange = (e) => {
        formRef.current = {
            ...formRef.current,
            [e.target.id]: e.target.value
        }
        setFormData(formRef.current)
    }
    
    let handleSubmit = () => {
        e.preventDefault()

    }


    console.log(passwordCheck)
    return (
        <CardGroup className='w-100'>
            <Card style={{width: '30rem'}}>
                <Form>
                    <Form.Group>
                        <Form.Control
                            className='rounded-pill bg-light m-2'
                            placeholder='email'
                            value={formData.email}
                            autoComplete='email'
                            id='email'
                            required
                            onChange={handleChange}
                        />
                        <Form.Control
                            className='rounded-pill bg-light m-2'
                            placeholder='password'
                            type="password"
                            autoComplete='new-password'
                            value={formData.password}
                            id='password'
                            onChange={handleChange}
                        />
                        <Form.Control
                            className='rounded-pill bg-light m-2'
                            placeholder='repeat password'
                            type='password'
                            autoComplete='new-password'
                            value={formData.repeat}
                            id='repeat'
                            onChange={handleChange}
                        />
                        <Button 
                            variant='primary'
                            className='rounded-pill'
                            disabled={passwordCheck.invalid ? true : false}
                            onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form.Group>
                </Form>
            </Card>
            <Card>
                <PasswordVerify val={passwordCheck}/>
            </Card>
        </CardGroup>
    );
}

export default SignUp;
