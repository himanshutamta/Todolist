import React from "react";
import './AddTodo.css'
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo} from '../actions/index'
import { useState } from "react";
import { useSelector } from "react-redux";
import Checkbox from '@mui/material/Checkbox';


const AddTodo = () => {

    const [inputs, setInputs] = useState('');
    // const [forEdit, setForEdit] = useState(true)
    const list = useSelector((state) => state.todoReducers.list)
    const dispatch = useDispatch();

    // const editTodo = () => {
    //  console.log("himanshu")
    // }

    return (
        <>
            <div className="addtodo">
                <div>
                    <h1>TODOLIST</h1>
                    <input type="text" name='todo' placeholder='what needs to be done?'
                        value={inputs} onChange={(event) => setInputs(event.target.value)}
                    />
                    <button className="submit" type="submit" onClick={() => dispatch(addTodo(inputs), setInputs(''))}>+</button>
                </div>

                <div className="showItems">
                    {list.map((element) => {
                        return (
                            <div className="eachItem" key={element.id}>
                                <h3><Checkbox />{element.data}</h3>
                                <div>
                                    <button className="edit" >Edit</button>
                                    <button className="delete" onClick={() => dispatch(deleteTodo(element.id))}>X</button>
                                </div>
                            </div>

                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default AddTodo;