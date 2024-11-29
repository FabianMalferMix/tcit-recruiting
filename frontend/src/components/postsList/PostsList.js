import React from 'react';
import './PostsList.css';
import ListHeader from './ListHeader';
import ListItem from './ListItem';
import { useSelector } from 'react-redux';


const PostsList = () => {

    const posts = useSelector((state) => state.posts.posts);
    const searchValue = useSelector(state => state.searchValue)

    const renderingPosts = searchValue !== "" ? posts.filter(post => post.name === searchValue) : posts

    if (posts.length === 0){
        return(
            <div><h2>No se encontraron Posts</h2></div>
        )
    }

    if (searchValue !== "" && renderingPosts.length === 0){
        return (
            <h2>Búsqueda no entregó resultados</h2>
        )
    }
    
    return(
        <div className='border-container'>
            <div className='postslist-container'>
                <div className='postslist-header'> <ListHeader col1="Nombre" col2="Descripcion" col3="Accion"/> </div>
                <ul className='posts-list'>
                    {renderingPosts.map( post => {
                        return <ListItem key={post.id} id={post.id} name={post.name} description={post.description}/>
                    })}
                </ul>
            </div>
        </div>
    )
};

export default PostsList