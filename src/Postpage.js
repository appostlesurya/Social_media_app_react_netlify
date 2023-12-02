import { useContext } from "react";
import { Link, useParams } from "react-router-dom"
import DataContext from "./context/DataContext";

const Postpage =() => {
  const {posts, handleDelete} =useContext(DataContext)
  const {id} =useParams();
  const post = posts.find(post => (post.id).toString() === id);
  return(
    <main className="PostPage">
      <article className="post">
        {post &&
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.date}</p>
            <p className="postBody">{post.body}</p>
            <Link to = {`/edit/${post.id}`}>
            <button className="editbutton">Edit Post</button>
            </Link>-
            <button className="deletebutton" onClick={() => handleDelete(post.id)}>Delete Post</button>
          </>
        }
        {
          !post &&
            <>
              <h2>Post Not Found</h2>
              <p>Well, that's disappointing</p>
              <p><Link to="/">Visit Our Homepage</Link></p>
            </>
        }
      </article>
    </main>
  )
}

export default Postpage