import React from "react";
import './ListItem.css';

const ListItem = props => {
    return(
        <li className="posts-list-item">
            <div className="list-item-grid">
                <div className="list-item-cell-name">{props.name}</div>
                <div className="list-item-cell-desc">{props.description}</div>
                <div className="list-item-cell-button">Boton</div>
            </div>
        </li>
    )
};

export default ListItem