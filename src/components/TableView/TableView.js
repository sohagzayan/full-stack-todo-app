import propTypes from 'prop-types';
import React from 'react';
import { Table } from 'reactstrap';
import TableItem from './TableItem';


const TableView = ({todos , toggleSelect , toggleComplete}) => {
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
                       toggleSelect={toggleSelect}
                       toggleComplete={toggleComplete} 
                    />

                   )) 
                }
            </tbody>
        </Table>
    );
};

TableView.propTypes = {
    todos : propTypes.array.isRequired,
    toggleSelected : propTypes.func.isRequired,
    toggleCompleted : propTypes.func.isRequired
}

export default TableView;