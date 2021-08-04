import useFetch from '../useFetch';
import BlogList from './BlogList';

function Home() {
  const { data: blogs, isLoading, Error } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      {Error && <div>{Error}</div>}
      {isLoading && <div> Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
}
export default Home;
