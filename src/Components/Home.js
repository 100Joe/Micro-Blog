import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

function Home() {
  const [blogs, setBlogs] = useState([
    { title: "New Story", body: 'lorem ipsum....', author: 'Joseph', id: 1 },
    { title: "New breakthrough", body: 'lorem ipsum....', author: 'Jose', id: 2 },
    { title: "New tale", body: 'lorem ipsum....', author: 'Joe', id: 3 }
  ]);
  const [name, setName] = useState('Joseph')

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log(name)
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
      <button onClick={() => setName('Joe')}>Change Name</button>
    </div>
  );
}
export default Home;
