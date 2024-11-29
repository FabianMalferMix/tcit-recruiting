import './App.css';

import SearchBar from './components/searchBar/SearchBar';
import PostsList from './components/postsList/PostsList';
import PostsMaker from './components/postMaker/PostMaker';

import {Provider} from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className='container-grid'>
          <div className='cell'> <SearchBar/> </div>
          <div className='cell posts-list'> <PostsList/> </div>
          <div className='cell'> <PostsMaker/> </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;