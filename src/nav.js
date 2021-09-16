import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

return (
    <div className="container">
      <div className="row justify-content-md-center">
    <nav className="navbar navbar-dark bg-dark">
   
      
  <Link to="/"><button className="nav-item btn btn-outline-success col-lg  " type="button">  Home</button></Link>
  <div className="col-lg"></div>
  <div className="col-lg h2 text-white">Star Wars Blog</div>
  <Link to="/personajes"><button className="nav-item btn btn-outline-success col-lg " type="button">  Personajes</button></Link>
  <Link to="/naves"><button className="nav-item  btn btn-outline-success col-lg  " type="button">  Naves</button></Link>
  <Link to="/planetas"><button className="nav-item  btn btn-outline-success col-lg" type="button">  Planetas</button></Link>

  </nav>
  </div>
  </div>
)

}

export default Nav;