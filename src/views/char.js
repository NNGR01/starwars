import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Char = (props) => {
  const { store, actions } = useContext(Context);
  const { character } = store;
  console.log(character);
  const { result } = character;
  const { id } = useParams();

  useEffect(() => {
    actions.getChar(id);
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
                  Altura - {result.properties.height}
                </li>
                <li className="list-group-item">
                  Peso - {result.properties.mass}
                </li>
                <li className="list-group-item">
                  Color de pelo - {result.properties.hair_color}
                </li>
                <li className="list-group-item">
                  Color de ojos - {result.properties.eye_color}
                </li>
                <li className="list-group-item">
                  Fecha de nacimiento - {result.properties.birth_year}
                </li>
                <li className="list-group-item">
                  Genero - {result.properties.gender}
                </li>
                <li className="list-group-item">
                  <Link to="/personajes">
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

export default Char;
