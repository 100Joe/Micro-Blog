import React from 'react'

function BlogList({ blogs, title, handleDelete }) {


  return (
    <div className='blog__list'>
      <p>{title}</p>
      {blogs.map((blog) => (
        <div className="blog__preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
