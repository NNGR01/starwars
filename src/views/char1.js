import { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

const Buscador = () => {
  const { store, actions } = useContext(Context);
  const [escrito, setEscrito] = useState("");
  const [respuesta, setRespuesta] = useState([]);
  const handleChange = (e) => {
    setEscrito(e.target.value);
  };

  useEffect(() => {
    if (store.characters.results != null) {
      const results = store.characters.results.filter(item => item.name.toString().toLowerCase().includes(escrito)
      );
      setRespuesta(results);
    }
  }, [store.characters.results, escrito]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-4 pt-4">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Personajes..."
                value={escrito}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
        {!!store.characters.results &&
          respuesta.map((item, i) => (
            <div key={i} className="col-md-4 p-1">
              <div className="h6">{item.name}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Buscador;
