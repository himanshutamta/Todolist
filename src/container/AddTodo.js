import React from "react";
import './AddTodo.css'
import { useDispatch } from "react-redux";
import { addTodo, editTodo, deleteAll} from '../actions/index'
import { useState } from "react";
import { useSelector } from "react-redux";
import Item from "./Item"


const AddTodo = () => {

    const [inputs, setInputs] = useState('');
    const [forEdit, setForEdit] = useState(false);
    const [editId, setEditId] = useState('false')
    const list = useSelector((state) => state.todoReducers.list)
    const dispatch = useDispatch();

    const editData = (data) => {
        setInputs(data.data)
        setForEdit(true)
        setEditId(data.id)
    }

    const updateData = () => {
        dispatch(editTodo({id:editId, data: inputs }));
        setForEdit(false);
        setInputs('');
        setEditId('')
    }

    const forElement = () => {
        if (inputs) return dispatch(addTodo(inputs), setInputs(''))
    }
    return (
        <>
            <div className="addtodo">
                <div>
                    <h1>TODOLIST</h1>
                    <input type="text" name='todo' placeholder='what needs to be done?'
                        value={inputs} onChange={(event) => setInputs(event.target.value)}
                    />
                    {
                        forEdit ? <button className="submit" type="submit" onClick={() => updateData()}>edit</button> :
                        <button className="submit" type="submit" onClick={() => forElement()}>+</button>
                    }
                </div>

                <div className="showItems">
                    {list.map((element) => {
                        return (
                            
                                <Item onEdit={editData} data={element}/>    
                        )
                    })
                    }
                    <div className="Count">
                        <div className="lengthCount">{list.filter(event => event.checked).length} of {list.length} task done.</div>
                    <button className="removeButton" onClick={() => dispatch(deleteAll())}>Remove Checked</button></div>
                </div>
            </div>

        </>
    )
   
}

export default AddTodo;