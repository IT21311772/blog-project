import React from 'react'

function BlogList({data, title}) {
  return (
    <div>
        <h2>{title}</h2>
      {data.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Recipe by : {blog.author}</p>
        </div>
      ))}
    </div>
  )
}

export default BlogList
