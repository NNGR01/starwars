import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const Planets = () => {
    const { store, actions}  =   useContext(Context);
 

  return (
    <div className="container">
      <div className="row">
       
        <div class="card-group">
          <div className="card">
            <img src="..." class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
              <p className="card-text text-center">
                <small class="text-muted ">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planets;
