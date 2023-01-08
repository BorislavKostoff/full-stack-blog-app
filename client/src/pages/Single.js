import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import moment from 'moment'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Menu from '../components/Menu'
import { AuthContext } from '../context/AuthContext'

const Single = () => {

  const [post, setPost] = useState({})

  const navigate = useNavigate()

  const location = useLocation()

  const postId = location.pathname.split("/")[2]

  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`)
        setPost(res.data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [postId])

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='single'>
      <div className='content'>
        <img src={post?.img} alt='' />
        <div className='user'>
          {post.userImg && <img src={post.userImg} alt='' />}
          <div className='info'>
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (<div className='edit'>
            <Link to={`/write?edit=2`}><FaEdit className='editIcon'/></Link>
            <FaTrashAlt onClick={handleDelete} className='deleteIcon'/>
          </div>)}
        </div>
        <h1>{post.title}</h1>
        {post.desc}
      </div>
      <Menu cat={post.cat}/>
    </div>
  )
}

export default Single