import { useContext, useEffect, } from "react";
import { useParams } from "react-router"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


 const Star = (props) => {

    const { store,actions} = useContext(Context);
    const { starship } = store;
    console.log(starship);
    const { result } = starship;
    const { id } = useParams();

    useEffect(() =>{
       actions.getStar(id);
    },[])



return (
    <div className="container">

{!!result && (
    <>
    
    <div className="personal">
            <div className="card">
            <div className="card-body text-center">
                <h5 className="card-title"> {result.properties.name} </h5>
            </div>
            <h6 className="card-subtitle mx-3 mb-2 text-muted text-center">Propiedades</h6>
            <ul className="list-group list-group-flush text-center">
    <li className="list-group-item">Modelo - {result.properties.model}</li>
    <li className="list-group-item">Fabricante - {result.properties.manufacturer}  </li>
    <li className="list-group-item">Costo en créditos - {result.properties.cost_in_credits}</li>
    <li className="list-group-item">Largo - {result.properties.length}</li>
    <li className="list-group-item">Clasificación de hiperpropulsor - {result.properties.hyperdrive_rating}</li>
    <li className="list-group-item"><Link to="/planetas"><button className="btn btn-outline-success text-start mx-3" type="button">Volver</button></Link></li>
     
  </ul>
       </div>
        </div>
    </>
)}
</div>
)


}

export default Star;
{/*  {!!result && (
          <>

<div className="personal">
  <div className="card">
  <div className="card-body text-center">
      <h5 className="card-title"> {result.properties.name} </h5>
  </div>
  <h6 className="card-subtitle mx-3 mb-2 text-muted text-center">Propiedades {1}</h6>
  <ul className="list-group list-group-flush text-center">
<li className="list-group-item">Periodo de Rotacion - {result.descritions}</li>
<li className="list-group-item">Periodo de Orbita {result.properties.starship_class}</li>
<li className="list-group-item">Diametro - </li>
<li className="list-group-item">Clima - </li>
<li className="list-group-item">Gravedad - </li>
<li className="list-group-item"><Link to="/planetas"><button className="btn btn-outline-success text-start mx-3" type="button">Volver</button></Link></li>

</ul>
</div>
</div>
          </>
      )
  } */}