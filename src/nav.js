import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

return (
    <div className="container">
    <nav className="navbar navbar-dark bg-dark">
    <div className="contaner-fluid">
  <Link to="/"><button className="btn btn-outline-success mx-3 text-end" type="button">  Home</button></Link>
  <Link to="/personajes"><button className="btn btn-outline-success text-start mx-3" type="button">  Personajes</button></Link>
  <Link to="/naves"><button className="btn btn-outline-success mx-3" type="button">  Naves</button></Link>
  <Link to="/planetas"><button className="btn btn-outline-success mx-3" type="button">  Planetas</button></Link>
  </div>
  </nav>
  </div>
)

}

export default Nav;