import React from 'react';
import { Link } from 'react-router-dom';

function BlogList({data, title}) {
  return (
    <div>
        <h2 style={{textAlign: 'center', fontSize: 32, color: '#f74a84'}}>{title}</h2>
      {data.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Recipe by : {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default BlogList
