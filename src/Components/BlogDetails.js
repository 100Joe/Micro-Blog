import React from 'react'
import { useHistory, useParams } from 'react-router-dom';
import useFetch from '../useFetch';

function BlogDetails() {
  const { id } = useParams();
  let port = process.env.port
  const { data: blog, error, isLoading } = useFetch(`${port}` + id);
  const history = useHistory();

  const handleClick = () => {
    fetch(`${port}` + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    })
  }

  return (
    <div className="blog__details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  )
}

export default BlogDetails;