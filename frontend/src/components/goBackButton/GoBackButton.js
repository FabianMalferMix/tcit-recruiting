import React from "react";
import "./GoBackButton.css"
import { resetSearchAction } from "../../redux/actions/searchActions";
import { useDispatch } from "react-redux";



const GoBackButton = () => {

    const dispatch = useDispatch();

    const clickHandler = (e) => {
        e.preventDefault()
        dispatch(resetSearchAction())
    }


    return(
        <button type="submit" className="goback-button" onClick={clickHandler}>
            Volver atrás
        </button>
    )

};

export default GoBackButton