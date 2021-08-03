import React, { useState } from 'react';
import BlogList from './BlogList';

function Home() {
  const [blogs, setBlogs] = useState([
    { title: "New Story", body: 'lorem ipsum....', author: 'Joseph', id: 1 },
    { title: "New breakthrough", body: 'lorem ipsum....', author: 'Jose', id: 2 },
    { title: "New tale", body: 'lorem ipsum....', author: 'Joe', id: 3 }
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title='All Blogs' />
    </div>
  );
}
export default Home;
