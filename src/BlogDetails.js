import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';

function BlogDetails() {
    const { id } = useParams();
    const { data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useHistory();

    const handleClick = () => {
      fetch('http://localhost:8000/blogs/' + blog.id, {
        method: 'DELETE'
      }).then(() => {
        navigate.push('/');
      })
    }

  return (
    <div className='blog-details'>
      {isPending && <div className='loading'>Loading ....</div>}
      {error && <div className='error'>{error}</div>}
      {blog && (
        <article>
          <h2>The Recipe { id } - {blog.title}</h2>
          <p>Recipe by : {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete Recipe</button>
        </article>
      )}
    </div>
  )
}

export default BlogDetails
