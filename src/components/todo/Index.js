import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import shortid from 'shortid';
import Controller from '../controllers/Controller';
import CreateTodoForm from '../Create-tudo-form/CreateTodoForm';
import ListView from '../ListView/ListView';
import TableView from '../TableView/TableView';

const Index = () => {

    const [isModalOpen , setIsModalOpen]  = useState(false) 
    const [searchTarm , setSearchTarm]  = useState('')

    const [todos , setTodos] = useState([
        {id:'53535', text : "sohag is dev" , isSelect : false , isCompleted : false, time : new Date() },
        {id:'535d35', text : "zayan is dev" ,isSelect : false , isCompleted : false, time :new Date()},
        {id:'5353d5', text : "milon is dev", isSelect : false , isCompleted : false, time :new Date()},
    ])




    
    const toggleSelect = (id)=>{
        const tudosClone = [...todos]
        const Complited = tudosClone.find(tudo => tudo.id === id)
        Complited.isSelect =  !Complited.isSelect
        setTodos(tudosClone)
    }

    
    const toggleCompleted = (id)=>{
        const tudosClone = [...todos]
        const Complited = tudosClone.find(tudo => tudo.id === id)
        Complited.isCompleted =  !Complited.isCompleted
        setTodos(tudosClone)

    }


    const toggleForm = ()=> {
        setIsModalOpen(!isModalOpen)
    }
    const handleSearch  = ()=>{

    }

    const createTodo = (text , description)=>{
        const newTudo = {
            text : text,
            id : shortid.generate(),
            isSelect : false,
            isCompleted : false,
            time : new Date()
        }
        setTodos([newTudo , ...todos])
         
        toggleForm()

    }
    return (
        <div>
            <h1 className='display-4 text-center mb-5'>Stack todo</h1>
            <Controller 
                tarm={searchTarm}
                handleSearch={handleSearch}
                toggleForm={toggleForm}
            
            />
            <div>
                <ListView 
                todos={todos}
                toggleSelected={toggleSelect}
                toggleComplete={toggleCompleted}
                />
            </div>
            <div>
                <TableView 
                todos={todos}
                toggleSelected={toggleSelect}
                toggleComplete={toggleCompleted}
                />
            </div>

            <Modal isOpen={isModalOpen} toggle={toggleForm}>
                <ModalHeader toggle={toggleForm}>
                    Create New Todo Item
                </ModalHeader>
                <ModalBody>
                        <CreateTodoForm createTodo={createTodo} />
                </ModalBody>
            </Modal>
        </div>
    );
};

export default Index;