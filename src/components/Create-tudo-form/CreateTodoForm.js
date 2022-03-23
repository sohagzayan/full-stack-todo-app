import propTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const CreateTodoForm = ({createTodo}) => {
    const [text , setText]  = useState('')
    const [description , setDescription]  = useState('')
    
    const handleChange = (e)=>{
        if(e.target.type === 'text'){
            setText(e.target.value)
            
        }else{

            setDescription(e.target.value)
        }
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        createTodo(text, description)
        e.target.reset()
        setText('')
        setDescription('')
         
    }

    
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>Enter Task </Label>
                <Input 
                    placeholder='do some code '
                    name="text"
                    value={text}
                    onChange={handleChange}

                />
            </FormGroup>
            <FormGroup>
                <Label>Describe Task </Label>
                <Input 
                    type='textarea'
                    placeholder='write some sort description'
                    name="text"
                    value={description}
                    onChange={handleChange}
                    handleChange={handleChange}


                />
            </FormGroup>
            <Button type='submit'>Create Task</Button>
        </Form>
    );
};


CreateTodoForm.propTypes ={
    createTodo : propTypes.func.isRequired
}

export default CreateTodoForm;