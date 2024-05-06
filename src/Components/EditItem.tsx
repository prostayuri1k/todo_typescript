import React, {useState} from 'react';
import {ITodo} from "../Types/todo";
import {Button, Input, Space} from "antd";

interface IEditItem extends ITodo{
    updateTodo: (id: string, text: string) => void;
}

const EditItem: React.FC<IEditItem> = ({title, id, updateTodo}) => {

    const [text, setText] = useState(title);

    return (
        <div className={'todo'}>
            <Space.Compact style={{width: '100%',}}>
                <Input
                    placeholder='Update todo'
                    value={text}
                    onChange={event => setText(event.target.value)}
                    onPressEnter={() => updateTodo(id, text)}
                />
                <Button type="primary" onClick={() => updateTodo(id, text)}>Update</Button>
            </Space.Compact>
        </div>
    );
};

export default EditItem;