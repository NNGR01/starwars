import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Vehicles = () => {
    const { store, actions}  =   useContext(Context);
    console.log(store.vehicle)
 

  return (
    <div className="container">
      <div className="row">
       
    {
      store.vehicles.results != null ?
      store.vehicles.results.map((vehi, i) =>  {
        return (

        <div key={i} className="col-md-4 pt-4">
          <div className="card" >
            <img src="https://gotripslk.com/site/images/uploads/img.jpg" class="card-img-top " alt="..." />
            <div className="card-body ">
              <h5 className="card-title text-center">{vehi.name}</h5>
              <p className="card-text text-center">
                <small class="text-muted ">Url: {vehi.url}</small>
               </p>
               <p className="card-text text-center"> <Link to={`/vehiculos/${vehi.uid}`}><button className="btn btn-outline-success mx-3 text-center" type="button">Ficha tecnica</button></Link></p>
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

export default Vehicles;
