import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPostAction } from '../../redux/actions/postActions';
import './PostMaker.css';

const PostsMaker = () => {

    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts)

    const [nameInputValue, setNameInputValue] = useState("");
    const [descInputValue, setDescInputValue] = useState("");

    const getNextId = () => {
        if (posts && posts.length > 0) {
            const maxId = Math.max(...posts.map(post => post.id));
            return maxId + 1;
        }
        return 1;
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const newPost = {
            id: getNextId(),
            name: nameInputValue.trim(),
            description: descInputValue.trim()
        }
        dispatch(createPostAction(newPost))

        setNameInputValue("")
        setDescInputValue("")
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