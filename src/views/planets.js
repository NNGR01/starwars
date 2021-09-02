import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Planets = () => {
    const { store, actions}  =   useContext(Context);
    console.log(store.planet)
 

  return (
    <div className="container">
      <div className="row">
       
    {
      store.planets.results != null ?
      store.planets.results.map((plan, i) =>  {
        return (

        <div className="col-md-4 pt-4" key={i}>
          <div className="card" >
            <img src="https://gotripslk.com/site/images/uploads/img.jpg" class="card-img-top " alt="..." />
            <div className="card-body ">
              <h5 className="card-title text-center">{plan.name}</h5>
              <p className="card-text text-center">
                <small class="text-muted ">Url: {plan.url}</small>
              </p>
              <p className="card-text text-center"> <Link to={`/planetas/${plan.uid}`}><button className="btn btn-outline-success mx-3 text-center" type="button">Ficha tecnica</button></Link></p>
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

export default Planets;
