import './App.css';

import SearchBar from './components/searchBar/SearchBar';
import PostsList from './components/postsList/PostsList';
import PostsMaker from './components/postMaker/PostMaker';

function App() {
  return (
    <div className="App">
      <div className='container-grid'>
        <div className='cell'> <SearchBar/> </div>
        <div className='cell'> <PostsList/> </div>
        <div className='cell'> <PostsMaker/> </div>
      </div>

    </div>
  );
}

export default App;
