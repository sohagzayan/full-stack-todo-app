import propTypes from 'prop-types';
import React from 'react';
import { CustomInput } from 'reactstrap';


const TableItem = ({todo , toggleSelected , toggleCompleted}) => {
    return (
        <tr>
            <td>
                <CustomInput 
                 
                 id={todo.id}
                 type="checkbox"
                 checked ={todo.isSelected}
                 onChange={()=> toggleSelected(todo.id)}
                
                />
                <td>
                    {todo.time.toDateString()}

                </td>
                <td>{todo.text}</td>
                <td>{
                    <Button color={todo.isCompleted ? "danger" : 'success'} onClick={()=>  toggleCompleted(todo.id)} >
                        {todo.isCompleted ? "Completed" : "Running"}
                    </Button>
                    }</td>
            </td>
        </tr>
    );
};

TableItem.propTypes ={
    todo : propTypes.object.isRequired,
    toggleSelected : propTypes.func.isRequired,
    toggleCompleted : propTypes.func.isRequired
}


export default TableItem;