import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Characters = () => {
  const { store } = useContext(Context);
  const { characters } = store;
  const { results } = characters;

  return (
    <div className="container">
      <div className="row">
        {!!results &&
          results.map((item, index) => {
            return (
              <div key={index} className="col-md-4 pt-4">
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
            );
          })}
      </div>
    </div>
  );
};

export default Characters;
