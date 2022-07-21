import React, { useState } from 'react'

import './layout.css'

import Todo from '../Functions/TodoFunction';
import FormTodo from '../Functions/FormTodo';

import Socials from '../Socials/Socials';

const Layout = () => {

    const [todo, setTodo] = useState([
        {
            text: "Add your first todo",
            isDone: false
        }
    ]);

    const addTodo = text => {
        const newTodo = [...todo, { text }];
        setTodo(newTodo);
    };

    const markTodo = index => {
        const newTodo = [...todo];
        newTodo[index].isDone = true;
        setTodo(newTodo);
    };

    const removeTodo = index => {
        const newTodo = [...todo];
        newTodo.splice(index, 1);
        setTodo(newTodo);
    };

    return (
        <div className='todo_container'>
            <h1>ToDo List</h1>
            <FormTodo addTodo={addTodo} />
            <div className='todo_list'>
                {todo.map((todo,index) => (
                    <div className='todo_text_box'>
                        <div>
                            <Todo
                            key={index}
                            index={index}
                            todo={todo}
                            markTodo={markTodo}
                            removeTodo={removeTodo}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <Socials />
        </div>
    )
}

export default Layout