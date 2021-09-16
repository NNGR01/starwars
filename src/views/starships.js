import { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Naves = () => {
  const { store, actions } = useContext(Context);
  const [escrito, setEscrito] = useState("");
  const [respuesta, setRespuesta] = useState([]);
  const handleChange = (e) => {
    setEscrito(e.target.value);
  };

  useEffect(() => {
    if (store.starships.results != null) {
      const results = store.starships.results.filter((item) =>
        item.name.toString().toLowerCase().includes(escrito)
      );
      setRespuesta(results);
    }
  }, [store.starships.results, escrito]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-4 pt-4">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Naves..."
                value={escrito}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
        {!!store.starships.results &&
          respuesta.map((item, i) => (
            <div key={i} className="col-md-4 pt-4">
              <div className="card">
                <img
                  src="https://gotripslk.com/site/images/uploads/img.jpg"
                  class="card-img-top "
                  alt="..."
                />
                <div className="card-body ">
                  <h5 className="card-title text-center">{item.name}</h5>
                  <p className="card-text text-center">
                    <small class="text-muted ">Url: {item.url}</small>
                  </p>
                  <p className="card-text text-center">
                    {" "}
                    <Link to={`/personajes/${item.uid}`}>
                      <button
                        className="btn btn-outline-success mx-3 text-center"
                        type="button"
                      >
                        Ficha tecnica
                      </button>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <br />
      <button
        className="btn btn-outline-success"
        onClick={() => actions.getStarsh(store.starships.previous)}
      >
        Anterior
      </button>
      <button
        className="btn btn-outline-success"
        onClick={() => actions.getStarsh(store.starships.next)}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Naves;
