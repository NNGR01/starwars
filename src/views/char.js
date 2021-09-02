import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { Link } from "react-router-dom";

const Char = () => {

    const { id } = useParams();

    const [ character, setCharacter ] = useState([])

    useEffect(() =>{
        getChar()
    },[character])

const getChar = async () => {
    const data = await fetch(`https://swapi.dev/api/people/${id}`)
    const character = await data.json();
    setCharacter(character)
}


return (
    <div className="container">
        <div className="personal">
            <div className="card">
            <div className="card-body text-center">
                <h5 className="card-title"> {character.name} </h5>
            </div>
            <h6 className="card-subtitle mx-3 mb-2 text-muted text-center">Propiedades</h6>
            <ul className="list-group list-group-flush text-center">
    <li className="list-group-item">Altura - {character.height}</li>
    <li className="list-group-item">Peso - {character.mass}</li>
    <li className="list-group-item">Color de pelo - {character.hair_color}</li>
    <li className="list-group-item">Color de ojos - {character.eye_color}</li>
    <li className="list-group-item">Fecha de nacimiento - {character.birth_year}</li>
    <li className="list-group-item">Genero - {character.gender}</li>
    <li className="list-group-item"><Link to="/personajes"><button className="btn btn-outline-success text-start mx-3" type="button">Volver</button></Link></li>
    
  </ul>
       </div>
        </div>
  
    </div>
)


}

export default Char;