import React, { useRef, useState } from 'react';
import './styles/App.css';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'JS', body: 'Description' },
        { id: 2, title: 'JS-1', body: 'Description' },
        { id: 3, title: 'JS-2', body: 'Description' }
    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    return (
        <div className = 'App'>
            <PostForm create = { createPost } />
            <PostList posts = { posts } title = 'List of JS Posts' />
        </div>
    );
}

export default App;
