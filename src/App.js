import React, { useState } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import './styles/App.css';
import PostItem from './components/PostItem';
import PostList from './components/PostList';

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'JS', body: 'Description' },
        { id: 2, title: 'JS-1', body: 'Description' },
        { id: 3, title: 'JS-2', body: 'Description' }
    ]);


    return (
        <div className = 'App'>
            <PostList posts = { posts } title = 'List of JS Posts' />
        </div>
    );
}

export default App;
