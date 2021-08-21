import BlogList from './BlogList';
import { blogs } from '../data/db.json';

function Home() {

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" />
    </div>
  );
}
export default Home;
