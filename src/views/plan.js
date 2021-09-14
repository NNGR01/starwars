import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Plan = (props) => {
  const { store, actions } = useContext(Context);
  const { planet } = store;
  console.log(planet);
  const { result } = planet;
  const { id } = useParams();

  useEffect(() => {
    actions.getPlan(id);
  }, []);

  return (
    <div className="container">
      {!!result && (
        <>
          <div className="personal">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title"> {result.properties.name} </h5>
              </div>
              <h6 className="card-subtitle mx-3 mb-2 text-muted text-center">
                Propiedades
              </h6>
              <ul className="list-group list-group-flush text-center">
                <li className="list-group-item">
                  Periodo de Rotacion - {result.properties.rotation_period}
                </li>
                <li className="list-group-item">
                  Periodo de Orbita - {result.properties.orbital_period}{" "}
                </li>
                <li className="list-group-item">
                  Diametro - {result.properties.diameter}
                </li>
                <li className="list-group-item">
                  Clima - {result.properties.climate}
                </li>
                <li className="list-group-item">
                  Gravedad - {result.properties.gravity}
                </li>
                <li className="list-group-item">
                  <Link to="/planetas">
                    <button
                      className="btn btn-outline-success text-start mx-3"
                      type="button"
                    >
                      Volver
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Plan;
