import propsType from 'prop-types';
import React from 'react';
import { CustomInput, ListGroupItem } from 'reactstrap';

const ListItem = ({todo , toggleSelect , toggleComplete}) => {
    return (
        <ListGroupItem className='d-flex align-item-center'>
            <CustomInput 
                type ="checkbox"
                id={todo.id}
                checked ={todo.isSelect}
                onChange={()=>toggleSelect(todo.id)}
            />
            <div className="mx-3">
                    <h4>{todo.text}</h4>
                    <p>{todo.time.toDateString()}</p>
            </div>
            <button className='ml-auto' color={todo.isComplete ? 'danger' : 'success'} onClick={()=>toggleComplete(todo.id)}>
                    {todo.isComplete ? "Completed" : "Running"}
            </button>
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