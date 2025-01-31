import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Maths = () => {

    let [operation, setOperation] = useState({
        previous: null,
        number: null,
        operand: null
    })

    let [history, setHistory] = useState([])

    // Need to get history

    let updateNum = (number)=> {
        if(number == '.'){
            if(!operation.decimal){
                if(operation.number != null && operation.number != 0){
                    setOperation({
                        ...operation,
                        decimal:true,
                        number: String(operation.number) + '.'
                    })
                } else {
                    setOperation({
                        ...operation,
                        decimal: true,
                        number: '0.'
                    })
                }
            } 
        } else {
            if(operation.number != null && (operation.number != 0 || operation.decimal)){
                setOperation({
                    ...operation,
                    number: String(operation.number) + String(number)
                })
            } else {
                setOperation({
                    ...operation,
                    number: String(number)
                })
            }
        }
        
      
            // if(operation.number != null && operation.number != 0){
            //     setOperation({
            //         ...operation,
            //         number: String(operation.number) + number
            //     })
            // } else {
            //     setOperation({
            //         ...operation,
            //         number: String(number)
            //     })
            // }
    }

    let updateOperand = (symbol) => {
        setOperation({
            previous: operation.number,
            number: null,
            operand: symbol
        })
    }

    let resetNumber = () => {
        setOperation({
            ...operation,
            number: null
        })
    }

    let resetAll = () => {
        setOperation({
            previous: null,
            number: null,
            operand: null
        })
    }

    let calculate = (num1,num2,operator) => {
        let result = null

        num1 = num1 == null ? 0 : num1
        num2 = num2 == null ? 0 : num2

        console.log(num1,num2)
        
        switch(operator){
            case '+':
                result = Number(num1) + Number(num2)
                break;
            case '-':
                result = Number(num1) - Number(num2)
                break;
            case '*':
                result = Number(num1) * Number(num2)
                break;
            case '/':
                result = Number(num1) / Number(num2)
                break;       
            default:
                console.log("No operator selected")
        }
        return result
    }

    let doMath = (ref) => {
        ref.number = ref.number == null ? 0 : ref.number

        let res = calculate(ref.previous, ref.number, ref.operand)
        // console.log(res)
        if(res != null){
            setHistory([
                ...history,
                {...operation, result: res}
            ])
            resetAll()
        }
    }
    

    const removeEntry = (pos) => {
        setHistory([...history.slice(0,pos), ...history.slice(pos+1, history.length)])
        // console.log()
    }

    useEffect(()=>{

    },[])


    return (
        <div>
            <Row>
                <Col>
                    <Card style={{ width: '32rem' }} data-bs-theme="dark">
                        <Card.Body>
                            <Card.Title >{operation.previous} {operation.operand} {operation.number || 0}</Card.Title>
                            <ButtonGroup className='w-75'>
                                <Button className='rounded-0' variant='secondary' size='lg' onClick={()=>updateNum(1)}>1</Button>
                                <Button className='rounded-0' variant='secondary' size='lg' onClick={()=>updateNum(2)}>2</Button>
                                <Button className='rounded-0' variant='secondary' size='lg' onClick={()=>updateNum(3)}>3</Button>
                                <Button className='rounded-0' variant='secondary' size='lg' onClick={()=>updateOperand("+")}>+</Button>
                            </ButtonGroup>
                            <br />
                            <ButtonGroup className='w-75'>
                                <Button className='rounded-0' variant='secondary' size='lg' onClick={()=>updateNum(4)}>4</Button>
                                <Button className='rounded-0' variant='secondary' size='lg' onClick={()=>updateNum(5)}>5</Button>
                                <Button className='rounded-0' variant='secondary' size='lg' onClick={()=>updateNum(6)}>6</Button>
                                <Button className='rounded-0' variant='secondary' size='lg' onClick={()=>updateOperand("-")}>-</Button>
                            </ButtonGroup>
                            <br />
                            <ButtonGroup className='w-75'>
                                <Button className='rounded-0' variant='secondary' size='lg' onClick={()=>updateNum(7)}>7</Button>
                                <Button className='rounded-0' variant='secondary' size='lg' onClick={()=>updateNum(8)}>8</Button>
                                <Button className='rounded-0' variant='secondary' size='lg' onClick={()=>updateNum(9)}>9</Button>
                                <Button className='rounded-0' variant='secondary' size='lg' onClick={()=>updateOperand("/")}>/</Button>
                            </ButtonGroup>
                            <br />
                            <ButtonGroup className='w-75'>
                                <Button className='rounded-0 w-50'variant='secondary' size='lg' onClick={()=>updateNum(0)}>0</Button>
                                <Button className='rounded-0 w-25'variant='secondary' size='lg' onClick={()=>updateNum('.')}>.</Button>
                                <Button className='rounded-0 w-25'variant='secondary' size='lg' onClick={()=>updateOperand("*")}>*</Button>
                            </ButtonGroup>
                            <br />
                            <ButtonGroup className='w-75'>
                                <Button className='rounded-0 w-25'variant='secondary' size='lg' onClick={()=>resetAll()}>AC</Button>
                                <Button className='rounded-0 w-25'variant='secondary' size='lg' onClick={()=>resetNumber()}>CE</Button>
                                <Button className='rounded-0 w-50'variant='secondary' size='lg' onClick={()=>doMath(operation)}>=</Button>
                            </ButtonGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card >
                       <Card.Title>History</Card.Title>
                       <Card.Text className='container justify-content-start'>
                            {history.map((entry, index) => {
                                // console.log(entry)
                                return (
                            <div key={index}>
                                <Button onClick={()=>{removeEntry(index)}} variant='danger' size='sm' className='m-1'>X</Button>
                                {`${entry.previous} ${entry.operand} ${entry.number} = ${entry.result}`}
                            </div>
                            )})}
                       </Card.Text>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Maths;
