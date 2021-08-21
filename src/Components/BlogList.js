import React from 'react'
import { Link } from 'react-router-dom';
import { blogs } from '../data/db.json';

function BlogList() {

  return (
    <div className='blog__list'>
      {blogs.map((blog) => (
        <div className="blog__preview" key={blog.id}>
          <p>{blog.title}</p>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
