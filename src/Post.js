import React, { useState } from 'react';

const Post = ({ post, onLike, onAddComment }) => {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    onAddComment(comment);
    setComment('');
  };

  const postStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    margin: '20px',
    padding: '20px',
    maxWidth: '500px'
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '8px'
  };

  const commentBoxStyle = {
    marginTop: '10px'
  };

  return (
    <div style={postStyle}>
      <img src={post.imageUrl} alt="Post" style={imageStyle} />
      <div>
        <button onClick={onLike}>Like ({post.likes})</button>
      </div>
      <div>
        <form onSubmit={handleCommentSubmit}>
          <input 
            type="text" 
            value={comment} 
            onChange={(e) => setComment(e.target.value)} 
            placeholder="Add a comment"
          />
          <button type="submit">Comment</button>
        </form>
      </div>
      <div style={commentBoxStyle}>
        {post.comments.map((comment, index) => (
          <div key={index}>{comment}</div>
        ))}
      </div>
    </div>
  );
}

export default Post;
