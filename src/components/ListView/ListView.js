import propTypes from 'prop-types';
import React from 'react';
import { ListGroup } from 'reactstrap';
import ListItem from './ListItem';


const ListView = ({todos, toggleSelect , toggleComplete}) => {
    return (
        <ListGroup>
             {todos.map((todo)=>(
                 <ListItem 
                    key={todo.id}
                    todo={todo}
                    toggleSelect={toggleSelect}
                    toggleComplete={toggleComplete}    
                 />
             ))}
        </ListGroup>
    );
};


ListView.prototype ={
    todos : propTypes.object.isRequired,
    toggleSelect : propTypes.func.isRequired,
    toggleComplete :propTypes.func.isRequired
}

export default ListView;


