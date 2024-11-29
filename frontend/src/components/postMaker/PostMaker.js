import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { createPostAction } from '../../redux/actions/postActions';
import './PostMaker.css';

const PostsMaker = () => {

    const dispatch = useDispatch();

    const [nameInputValue, setNameInputValue] = useState("");
    const [descInputValue, setDescInputValue] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createPostAction({id:88, name:nameInputValue, description:descInputValue}))
        console.log('Creación de Post')
    };

    return(
        <div className='postmaker-container'>
            <form className='postmaker-form' onSubmit={submitHandler}>
                <input 
                    type="text" className='postmaker-form-nameinput' placeholder='Nombre Post'
                    value={nameInputValue} onChange={(e)=>setNameInputValue(e.target.value)}
                />
                <input 
                    type="text" className='postmaker-form-descinput' placeholder='Descripcion Post'
                    value={descInputValue} onChange={(e)=>setDescInputValue(e.target.value)}
                />
                <button 
                    type="submit" className='postmaker-form-button' 
                    disabled={!(nameInputValue.trim() && descInputValue.trim())}
                >
                    Crear Post
                </button>
            </form>
        </div>
    )
};
// 
export default PostsMaker