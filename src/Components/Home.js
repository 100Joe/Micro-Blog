import React, { useState } from 'react';

function Home() {
  const [blogs, setBlogs] = useState([
    { title: "New Story", body: 'lorem ipsum....', author: 'Joseph', id: 1 },
    { title: "New breakthrough", body: 'lorem ipsum....', author: 'Jose', id: 2 },
    { title: "New tale", body: 'lorem ipsum....', author: 'Joe', id: 3 }
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog__preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
}
export default Home;
