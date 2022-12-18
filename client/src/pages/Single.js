import React from 'react'

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img src='https://images.pexels.com/photos/9433003/pexels-photo-9433003.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' alt='' />
        <div className='user'>
          <img src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='' />
          <div className='info'>
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
        </div>
      </div>
      <div className='menu'>menu</div>
    </div>
  )
}

export default Single