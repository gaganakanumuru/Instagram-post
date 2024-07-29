import React, { useState } from 'react';
import Post from './Post';

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, imageUrl: 'https://th.bing.com/th/id/OIP.bsfCtIhs9csiGp-_ghp_XgHaE8?&rs=1&pid=ImgDetMain', likes: 0, comments: [] },
    { id: 2, imageUrl: 'https://th.bing.com/th/id/OIP.bmqUU74XPSVAvwvm_Ld6VQHaFf?w=236&h=175&c=7&o=5&dpr=1.5&pid=1.20', likes: 0, comments: [] },
    // Add more posts as needed
  ]);

  const handleLike = (id) => {
    setPosts(posts.map(post => post.id === id ? { ...post, likes: post.likes + 1 } : post));
  };

  const handleAddComment = (id, comment) => {
    setPosts(posts.map(post => post.id === id ? { ...post, comments: [...post.comments, comment] } : post));
  };

  return (
    <div>
      {posts.map(post => (
        <Post 
          key={post.id} 
          post={post} 
          onLike={() => handleLike(post.id)} 
          onAddComment={(comment) => handleAddComment(post.id, comment)} 
        />
      ))}
    </div>
  );
}

export default App;
