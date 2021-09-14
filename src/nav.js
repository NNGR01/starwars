import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

return (
    <div className="container">
    <nav className="navbar navbar-dark bg-dark">
    <div className="container fluid">
      
  <Link to="/"><button className="btn btn-outline-success nav-item mx-3 " type="button">  Home</button></Link>
  <Link to="/personajes"><button className="btn btn-outline-success mx-3 nav-item " type="button">  Personajes</button></Link>
  <Link to="/naves"><button className="nav-item  btn btn-outline-success mx-3  " type="button">  Naves</button></Link>
  <Link to="/planetas"><button className="nav-item  btn btn-outline-success mx-3  " type="button">  Planetas</button></Link>
  </div>
  </nav>
  </div>
)

}

export default Nav;