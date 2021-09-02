import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { Link } from "react-router-dom";

const Plan = () => {

    const { id } = useParams();

    const [ planet, setPlanet ] = useState([])

    useEffect(() =>{
        getPlanet()
    },[planet])

const getPlanet = async () => {
    const data = await fetch(`https://swapi.dev/api/planets/${id}`)
    const planet = await data.json();
    setPlanet(planet)
}


return (
    <div className="container">
        <div className="personal">
            <div className="card">
            <div className="card-body text-center">
                <h5 className="card-title"> {planet.name} </h5>
            </div>
            <h6 className="card-subtitle mx-3 mb-2 text-muted text-center">Propiedades</h6>
            <ul className="list-group list-group-flush text-center">
    <li className="list-group-item">Periodo de Rotacion - {planet.rotation_period}</li>
    <li className="list-group-item">Periodo de Orbita {planet.orbital_period} </li>
    <li className="list-group-item">Diametro - {planet.orbital_period}</li>
    <li className="list-group-item">Clima - {planet.climate}</li>
    <li className="list-group-item">Gravedad - {planet.gravity}</li>
    <li className="list-group-item"><Link to="/planetas"><button className="btn btn-outline-success text-start mx-3" type="button">Volver</button></Link></li>
     
  </ul>
       </div>
        </div>
  
    </div>
)


}

export default Plan;