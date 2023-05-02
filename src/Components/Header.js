import React from 'react'
 import {Link} from 'react-router-dom';
 import "./Header.scss";
const Header = () => {
  return (
    <div className='header'>
    <Link to="/" >
      <div className='logo'>
        Movie App
      </div>
      </Link>
       
      <input type='text' placeholder='search any movie or tv shows'/>
       
      <Link to="/" >
      <div className='movie'>
        Movie
      </div>
      </Link>
      <Link to="/" >
      <div className='tv shows'>
        Tv Shows
      </div>
      </Link>
      <Link to="/" >
      <div className='watchlist'>
      watchlist

      </div>
      </Link>
    
       <div className='user-imag'>
         <img src='https://img.freepik.com/premium-vector/avatar-profile-icon_188544-4755.jpg?w=2000'/>
       </div>
    </div>
  )
} 

export default Header
