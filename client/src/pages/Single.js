import React from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

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
          <div className='edit'>
            <Link to={`/write?edit=2`}><FaEdit className='editIcon'/></Link>
            <FaTrashAlt className='deleteIcon'/>
          </div>
        </div>
        <h1>Ut eiusmod duis aliqua culpa.</h1>
        <p>Aute sunt incididunt laboris consequat laboris qui anim. Consectetur ea officia adipisicing laborum labore. Ut qui qui quis eiusmod id eiusmod aute minim minim. Laborum id dolor exercitation excepteur. Veniam et aliquip ex enim aliqua minim in.

Qui duis officia eu sint esse aliqua nulla esse amet irure velit amet esse dolore. Amet quis aute amet minim qui magna quis adipisicing elit qui aute sit ullamco. Incididunt mollit minim do in esse laborum commodo deserunt id eu enim sunt ex. Occaecat fugiat dolore ad ut tempor velit duis sunt elit do. Esse pariatur officia nulla irure duis ullamco aliqua irure exercitation magna. Et ipsum reprehenderit consequat et magna ex ad id aliqua deserunt sunt ut.

Id aliqua elit et et sunt commodo in et tempor. Officia laboris sint incididunt anim elit exercitation. Commodo laboris ex do commodo ut labore sunt voluptate aliquip Lorem voluptate in deserunt. Excepteur enim irure enim ea.</p>
      </div>
      <Menu />
    </div>
  )
}

export default Single