import React, { useState } from 'react';
import BlogList from './BlogList';

function Home() {
  const [blogs, setBlogs] = useState([
    { title: "New Story", body: 'lorem ipsum....', author: 'Joseph', id: 1 },
    { title: "New breakthrough", body: 'lorem ipsum....', author: 'Jose', id: 2 },
    { title: "New tale", body: 'lorem ipsum....', author: 'Joe', id: 3 }
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs);
  }

  return (
    <div className="home">
      <BlogList blogs={blogs} title='All Blogs' />
      <BlogList blogs={blogs.filter((blog) => blog.author === 'Joseph')} title="Joseph's blogs" handleDelete={handleDelete} />
    </div>
  );
}
export default Home;
