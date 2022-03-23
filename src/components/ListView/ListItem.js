import propsType from 'prop-types';
import React from 'react';
import { Button, Input, ListGroupItem } from 'reactstrap';

const ListItem = ({todo , toggleSelect , toggleComplete}) => {

    
    return (
        <ListGroupItem className='d-flex align-item-center'>
            <Input 
                type ="checkbox"
                id={todo.id}
                checked ={todo.isSelected}
                onChange={()=>toggleSelect(todo.id)}
            />
            <div className="mx-3">
                    <h4>{todo.text}</h4>
                    <p>{todo.time.toDateString()}</p>
                   
            </div>
            <Button className='ms-auto' color={todo.isCompleted ? 'danger' : 'success'} onClick={()=>toggleComplete(todo.id)}>
                    {todo.isCompleted ? "Completed" : "Running"}
            </Button>
        </ListGroupItem>
    );
};

export default ListItem;

ListItem.prototype ={
    todo : propsType.object.isRequired ,
    toggleComplete : propsType.func.isRequired,
    toggleSelect : propsType.func.isRequired,
}

// const todo = {
//     id : 'id',
//     text : "main todo text",
//     description : "simple description",
//     time : "currant time on crate todo",
//     isComplete : false ,
//     isSelect : false ,
// }