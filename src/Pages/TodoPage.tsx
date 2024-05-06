import React, {ChangeEvent, useState} from 'react';
import {Button, Input, Space} from "antd";
import {ITodo} from "../Types/todo";
import { v4 as uuidv4 } from 'uuid';
import TodoList from "../Components/TodoList";


const TodoPage: React.FC= () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement> ) => {
        setValue(e.target.value);
    }

    const addTodo = () => {
        if(value.trim()) {
            setTodos([...todos, {id: uuidv4(), title: value, completed: false, isEdit: false}]);
            setValue('');
        }
    }

    const removeTodo = (id: string): void => {
        setTodos(
            todos.filter(todo => todo.id !== id)
        )
    }

    const toggleTodo = (id: string): void => {
        setTodos(
            todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
        )
    }

    const editTodo = (id: string) : void => {
        setTodos(
            todos.map(todo => todo.id === id ? {...todo, isEdit: !todo.isEdit} : todo)
        )
    }

    const updateTodo = (id: string, text: string): void => {
        if(text.trim()) {
            setTodos(
                todos.map(todo => todo.id === id ? {...todo, title: text, isEdit: !todo.isEdit} : todo)
            )
        }
    }

    return (
        <div>
            <h1>Get things done!</h1>
            <Space.Compact style={{width: '100%', marginBottom: '20px'}}>
                <Input
                    placeholder='What is the task today?'
                    value={value}
                    onChange={handleChange}
                    onPressEnter={addTodo}
                />
                <Button type="primary" onClick={addTodo}>Add task</Button>
            </Space.Compact>
            {!!todos.length && <TodoList
                todos={todos}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
                updateTodo={updateTodo}
            />}
        </div>
    );
};

export default TodoPage;