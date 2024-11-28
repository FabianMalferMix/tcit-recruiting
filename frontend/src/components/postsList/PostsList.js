import React from 'react';
import './PostsList.css';
import ListHeader from './ListHeader';
import ListItem from './ListItem';

const DUMMY_DATA =[
    {id:1, name:"Post 1", description:"Description 1"},
    {id:2, name:"Post 2", description:"Description 2"},
    {id:3, name:"Post 3", description:"Description 3"},
    {id:4, name:"Post 4", description:"Description 4"},
    {id:5, name:"Post 5", description:"Description 5"},
    {id:6, name:"Post 6", description:"Description 6"},
    {id:7, name:"Post 7", description:"Description 7"},
    {id:8, name:"Post 8", description:"Description 8"},
    {id:9, name:"Post 9", description:"Description 9"},
    {id:10, name:"Post 10", description:"Description 10"},
    {id:11, name:"Post 11", description:"Description 11"},
    {id:12, name:"Post 12", description:"Description 12"},
    {id:13, name:"Post 13", description:"Description 13"},
    {id:14, name:"Post 14", description:"Description 14"},
    {id:15, name:"Post 15", description:"Description 15"},
    {id:16, name:"Post 16", description:"Description 16"},
    {id:17, name:"Post 17", description:"Description 17"},
    {id:18, name:"Post 18", description:"Description 18"},
    {id:19, name:"Post 19", description:"Description 19"},
    {id:20, name:"Post 20", description:"Description 20"},
    {id:21, name:"Post 21", description:"Description 21"},
    {id:22, name:"Post 22", description:"Description 22"},
    {id:23, name:"Post 23", description:"Description 23"},
    {id:24, name:"Post 24", description:"Description 24"},
    {id:25, name:"Post 25", description:"Description 25"},
    {id:26, name:"Post 26", description:"Description 26"},
    {id:27, name:"Post 27", description:"Description 27"},
    {id:28, name:"Post 28", description:"Description 28"},
    {id:29, name:"Post 29", description:"Description 29"},
    {id:30, name:"Post 30", description:"Description 30"},
]

const PostsList = () => {
    if (DUMMY_DATA.length === 0){
        return(
            <div><h2>No se encontraron Posts</h2></div>
        )
    }
    
    return(
        <div className='border-container'>
            <div className='postslist-container'>
                <div className='postslist-header'> <ListHeader col1="Nombre" col2="Descripcion" col3="Accion"/> </div>
                <ul className='posts-list'>
                    {DUMMY_DATA.map( post => {
                        return <ListItem key={post.id} name={post.name} description={post.description}/>
                    })}
                </ul>
            </div>
        </div>
    )
};

export default PostsList