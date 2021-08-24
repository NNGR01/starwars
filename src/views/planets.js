import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Planets = () => {
    const { store, actions}  =   useContext(Context);
    console.log(store.planets)
 

  return (
    <div className="container">
      <div className="row">
       
    {
      store.planet.results != null ?
      store.planet.results.map((plan, i) =>  {
        return (

        <div class="card-group" key={i}>
          <div className="card">
            <img src={plan.image} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">{plan.name}</h5>
              <p className="card-text text-center">
                <small class="text-muted ">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
        )
      })
      :
      (
        <h1>asd</h1>
      )
    }

      </div>
    </div>
  );
};

export default Planets;
