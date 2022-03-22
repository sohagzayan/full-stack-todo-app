import propTypes from 'prop-types';
import React from 'react';
import { Table } from 'reactstrap';
import TableItem from './TableItem';


const TableView = ({todos , toggleSelected , toggleCompleted}) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Time</th>
                    <th>Todo</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                   todos.map((todo)=>(
                    <TableItem 
                       key={todo.id}
                       todo={todo}
                       toggleSelected={toggleSelected}
                       toggleCompleted={toggleCompleted} 
                    />

                   )) 
                }
            </tbody>
        </Table>
    );
};

TableView.propTypes = {
    todos : propTypes.object.isRequired,
    toggleSelected : propTypes.func.isRequired,
    toggleCompleted : props.func.isRequired
}

export default TableView;