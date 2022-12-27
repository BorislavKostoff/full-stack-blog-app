import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const posts = [
    {
      id: 1,
      title: 'Minim eiusmod exercitation eu cupidatat Lorem nostrud et.',
      desc: 'Ad sunt fugiat eiusmod proident. Occaecat minim sint in est. Proident minim tempor nostrud et culpa deserunt in nostrud mollit ex officia mollit est. Magna laboris exercitation sint minim voluptate et nostrud Lorem commodo enim non consectetur. Anim occaecat exercitation aliquip in esse id reprehenderit est proident ullamco aliquip in cillum. Ullamco nulla nostrud ipsum occaecat in eu labore proident aliqua.',
      img: 'https://images.pexels.com/photos/9433003/pexels-photo-9433003.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
    },
    {
      id: 2,
      title: 'Tempor laborum dolore aute mollit enim nulla laboris ipsum occaecat commodo ad.',
      desc: 'Excepteur consequat sit laboris anim dolore nostrud exercitation id ea culpa. Labore officia minim duis culpa fugiat ut Lorem proident. Excepteur sunt voluptate et reprehenderit laboris excepteur exercitation esse ad id pariatur nostrud. Irure aliqua dolore ea non cupidatat incididunt deserunt in cupidatat fugiat veniam veniam incididunt. Excepteur occaecat duis do amet in culpa cupidatat deserunt anim incididunt nisi elit non elit. Ad do amet nisi Lorem et in amet ullamco consectetur pariatur ad esse. Ea ea labore ad occaecat laborum sint cupidatat fugiat commodo ipsum fugiat qui quis et.',
      img: 'https://images.pexels.com/photos/3614318/pexels-photo-3614318.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
    },
    {
      id: 3,
      title: 'Adipisicing consequat et enim eu mollit proident ut dolor fugiat anim occaecat et.',
      desc: 'Duis reprehenderit sit excepteur esse laboris consectetur fugiat est. Ad quis veniam ex velit pariatur consequat dolore officia irure amet mollit ea mollit. Duis sunt reprehenderit laboris proident proident cillum mollit sunt pariatur. Adipisicing ex mollit laboris laborum et amet commodo proident ex cupidatat sunt et culpa. Dolore elit aliqua culpa exercitation consequat. Nostrud eiusmod incididunt laboris adipisicing do nulla sunt qui ipsum nulla.',
      img: 'https://images.pexels.com/photos/13054478/pexels-photo-13054478.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
    },
    {
      id: 4,
      title: 'Tempor excepteur occaecat fugiat cillum fugiat ea voluptate nisi ea mollit quis amet est.',
      desc: 'Consequat laboris reprehenderit ipsum nulla proident culpa quis veniam id labore dolor adipisicing. Cupidatat consectetur cupidatat consequat officia proident proident pariatur anim ex. Ex magna mollit ut dolore esse non consequat ad incididunt commodo sint qui adipisicing. Consectetur esse aliquip adipisicing elit Lorem.',
      img: 'https://images.pexels.com/photos/12032341/pexels-photo-12032341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 5,
      title: 'Exercitation aute veniam veniam sint velit voluptate officia velit.',
      desc: 'Elit elit ut cillum aute id fugiat commodo aute qui minim id Lorem. Fugiat mollit incididunt consequat sint officia officia proident incididunt consequat. Cupidatat dolore ad anim consectetur occaecat deserunt magna adipisicing laboris incididunt ipsum consectetur id voluptate.',
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