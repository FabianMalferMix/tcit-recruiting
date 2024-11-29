import React, {useEffect} from 'react';
import { fetchPostsActionAS } from '../../redux/actions/postActions';
import './PostsList.css';
import ListHeader from './ListHeader';
import ListItem from './ListItem';
import GoBackButton from '../goBackButton/GoBackButton';
import { useSelector, useDispatch } from 'react-redux';


const PostsList = () => {

    const dispatch = useDispatch()
    // const posts = useSelector((state) => state.posts.posts);
    const { posts, loading, error } = useSelector((state) => state.posts);
    const searchValue = useSelector(state => state.searchValue)

    useEffect(() => {
        dispatch(fetchPostsActionAS()); // Obtiene los posts al cargar el componente
      }, [dispatch]);

    const renderingPosts = searchValue !== "" ? posts.filter(post => post.name === searchValue) : posts

    if (loading) return <p>Cargando...</p>;

    if (error) return <p>Error: {error}</p>;
    
    if (posts.length === 0){
        return(
            <div><h2>No se encontraron Posts, intente creando uno</h2></div>
        )
    }

    if (searchValue !== "" && renderingPosts.length === 0){
        return (
            <div>
                <h2>Búsqueda no entregó resultados, puede intentar con otra búsqueda o crear un Post.</h2>
                <GoBackButton/>
            </div>
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