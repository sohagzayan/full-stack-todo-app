import propTypes from "prop-types";
import React from "react";
import { Button, Input } from "reactstrap";

const TableItem = ({ todo, toggleSelect, toggleComplete }) => {

  return (
    <tr>
        <th scope='row' >
          <Input
            id={todo.id}
            type="checkbox"
            checked={todo.isSelected}
            onChange={() => toggleSelect(todo.id)}
          />
        </th>

        <td >{todo.time.toDateString()}</td>
        <td>{todo.text}</td>
        <td>
          {
            <Button
              color={todo.isCompleted ? "danger" : "success"}
              onClick={() => toggleComplete(todo.id)}
            >
              
              {todo.isCompleted ? "Completed" : "Running"}
            </Button>
          }
        </td>
     
    </tr>
  );
};

TableItem.propTypes = {
  todo: propTypes.object.isRequired,
  toggleSelected: propTypes.func.isRequired,
  toggleCompleted: propTypes.func.isRequired,
};

export default TableItem;
