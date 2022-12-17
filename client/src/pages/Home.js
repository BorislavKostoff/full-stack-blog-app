import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const posts = [
    {
      id: 1,
      title: 'title 1',
      desc: 'desc 1',
      img: 'https://images.pexels.com/photos/9433003/pexels-photo-9433003.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
    },
    {
      id: 2,
      title: 'title 2',
      desc: 'desc 2',
      img: 'https://images.pexels.com/photos/3614318/pexels-photo-3614318.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
    },
    {
      id: 3,
      title: 'title 3',
      desc: 'desc 3',
      img: 'https://images.pexels.com/photos/13054478/pexels-photo-13054478.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
    },
    {
      id: 4,
      title: 'title 4',
      desc: 'desc 4',
      img: 'https://images.pexels.com/photos/12032341/pexels-photo-12032341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 5,
      title: 'title 5',
      desc: 'desc 5',
      img: 'https://images.pexels.com/photos/10391653/pexels-photo-10391653.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
    },
  ]

  return (
    <div className='home'>
      <div className='posts'>
        {posts.map(post=>(
          <div className='post' key={post.id}>
            <div className='img'>
              <img src={post.img} alt='' />
            </div>
            <div className='content'>
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
                <button>Read more</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home