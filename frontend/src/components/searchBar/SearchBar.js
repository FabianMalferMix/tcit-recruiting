import React, {useState, useEffect} from 'react';
import './SearchBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchAction } from '../../redux/actions/searchActions';

const SearchBar = () => {

    const dispatch = useDispatch()
    // const searchValue = useSelector(state => state.searchValue)

    const [inputValue, setInputValue] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(setSearchAction(inputValue))
        console.log('Búsqueda de Post')
        
    };

    return(
        <div className='searchbar-container'>
            <form className='searchbar-form' onSubmit={submitHandler}>
                <input 
                    type="text" className='searchbar-form-input' placeholder='Buscar por nombre'
                    value={inputValue} onChange={(e)=>setInputValue(e.target.value)}
                />
                <button 
                    type="submit" className='searchbar-form-button' 
                    disabled={!inputValue.trim()}
                >
                    Buscar Post
                </button>

            </form>
    
        </div>
    )
};

export default SearchBar