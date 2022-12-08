import React from "react";
import Checkbox from '@mui/material/Checkbox';
import { deleteTodo, checked} from '../actions/index'
import { useDispatch } from "react-redux";



const Item = (props) => {
    const dispatch = useDispatch();

    return (
        
            <div className="eachItem" key={props.data.id}>
                <h3><Checkbox onClick={() => dispatch(checked(props.data.id))} />{props.data.data}</h3>
                <div>
                    <button className="edit" onClick={() => props.onEdit(props.data)}>Edit</button>
                    <button className="delete" onClick={() => dispatch(deleteTodo(props.data.id))}>X</button>
                </div>
            </div>
    
    )
}

export default Item;