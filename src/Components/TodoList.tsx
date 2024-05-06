import React from 'react';
import {ITodo} from "../Types/todo";
import TodoItem from "./TodoItem";
import EditItem from "./EditItem";

interface ITodoListProps {
    todos: ITodo[];
    removeTodo: (id: string) => void;
    toggleTodo: (id: string) => void;
    editTodo: (id: string) => void;
    updateTodo: (id: string, text: string) => void;
}

const TodoList: React.FC<ITodoListProps> = ({todos, toggleTodo, removeTodo, editTodo, updateTodo}) => {
    return (
        <div>
            {todos.map(
                todo =>
                    todo.isEdit ?
                        <EditItem key={todo.id} {...todo} updateTodo={updateTodo}/>
                        :
                        <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} removeTodo={removeTodo} editTodo={editTodo}/>
            )}
        </div>
    );
};

export default TodoList;