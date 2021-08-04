import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className='not__found'>
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <Link to='/' >Back to the homepage...</Link>

    </div>
  )
}

export default NotFound
