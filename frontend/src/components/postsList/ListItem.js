import React from "react";
import './ListItem.css';

import { useDispatch } from "react-redux";
import { deletePostAction } from "../../redux/actions/postActions";

const ListItem = props => {

    const dispatch = useDispatch()

    const clickHandler = (e) => {
        e.preventDefault();
        dispatch(deletePostAction({id:props.id, name:props.name, description:props.description}))
    }

    return(
        <li key={props.id} className="posts-list-item">
            <div className="list-item-grid">
                <div className="list-item-cell-name">{props.name}</div>
                <div className="list-item-cell-desc">{props.description}</div>
                <div className="list-item-cell-button">
                    <button type="submit" className="delete-post-button" onClick={clickHandler}>
                        Eliminar
                    </button>
                </div>
            </div>
        </li>
    )
};

export default ListItem