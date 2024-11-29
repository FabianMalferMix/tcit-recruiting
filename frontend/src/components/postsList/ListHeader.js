import React from "react";
import "./ListHeader.css";



const ListHeader = props => {
    return(
        <div className="list-header-grid">
                <div className="list-header-cell col1">{props.col1}</div>
                <div className="list-header-cell col2">{props.col2}</div>
                <div className="list-header-cell col3">{props.col3}</div>
            </div>
    )
};

export default ListHeader;

