import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const PostLayout = () => {
  return (
    <>
        <Link to="/Postpage/1">Post 1</Link>
        <br></br>
        <Link to="/Postpage/2">Post 2</Link>
        <br></br>
        <Link to="/Postpage/3">Post 3</Link>
        <br />
        <Link to='/Postpage/newpost'>NewPost</Link>

        <Outlet />
    </>
  )
}

export default PostLayout