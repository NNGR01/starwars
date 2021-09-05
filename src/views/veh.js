import { useContext, useEffect, } from "react";
import { useParams } from "react-router"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Veh = props => {

    const { id } = useParams();
    const { store,actions} = useContext(Context)
    const { vehicle } = store;
    const { result } = vehicle;

    useEffect(() =>{
       actions.getVeh(id);
    },[])



return (
    <div className="container">
        {
            !!result && (
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
        }

</div>
)


}

export default Veh;