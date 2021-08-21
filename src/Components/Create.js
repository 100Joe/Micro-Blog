import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import blogs from '../data/db.json';

function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Joseph');
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    const newBlog = blog.push([...blogs]);
    setIsLoading(true)
    return newBlog;
  }

  console.log(handleSubmit)


  return (
    <div className='create'>
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}
        method="post">
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <input
          value={author}
          name={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {!isLoading && <Link to='/' >Add Blog</Link>}
        {isLoading && <Link to='/'>Adding Blog...</Link>}
      </form>
    </div>
  )
}

export default Create;