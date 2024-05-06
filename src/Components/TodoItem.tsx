import React from 'react';
import {ITodo} from "../Types/todo";
import {Button, Space} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

interface ITodoItem extends ITodo{
    removeTodo: (id: string) => void;
    toggleTodo: (id: string) => void;
    editTodo: (id: string) => void;
}

const TodoItem: React.FC<ITodoItem> = ({id, title, completed, toggleTodo, removeTodo, editTodo}) => {
    const cls: string[] = ['todo'];
    if(completed) cls.push('completed');
    return (
        <div className={cls.join(' ')}>
            <Space.Compact style={{width: '100%',}}>
                <Button
                    className={'todo-btn'}
                    onClick={() => toggleTodo(id)}
                    style={{
                        width: '100%',
                        textAlign: 'left'
                }}
                >
                    {title}
                </Button>
                <Button 
                    type={"primary"}
                    onClick={() => editTodo(id)}
                >
                    <EditOutlined />
                </Button>
                <Button
                    type={"primary"}
                    onClick={() => removeTodo(id)}
                >
                    <DeleteOutlined />
                </Button>
            </Space.Compact>
        </div>
    );
};

export default TodoItem;