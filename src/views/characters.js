import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from 'react-router-dom';

const Characters = () => {
    const { store, actions}  =   useContext(Context);
    console.log(store.characters)
 

  return (
    <div className="container">
      <div className="row">
       
    {
      store.characters.results != null ?
      store.characters.results.map((char, i) =>  {
        return (

        <div key={i} className="col-md-4 pt-4">
          <div className="card" >
            <img src="https://gotripslk.com/site/images/uploads/img.jpg" class="card-img-top " alt="..." />
            <div className="card-body ">
              <h5 className="card-title text-center">{char.name}</h5>
              <p className="card-text text-center">
                <small class="text-muted ">Url: {char.url}</small>
               
               
              </p>
               <Link to={`/personajes/${char.uid}` } className="btn text-center">asd</Link>
            </div>
          </div>
          </div>
       
        )
      })
      :
      (
        <h1>Cargando...</h1>
      )
    }

      </div>
    </div>
  );
};

export default Characters;
