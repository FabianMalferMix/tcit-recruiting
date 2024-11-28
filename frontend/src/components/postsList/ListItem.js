import React from "react";
import './ListItem.css';

const ListItem = props => {

    const clickHandler = (e) => {
        e.preventDefault();
        console.log('Eliminar post')
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