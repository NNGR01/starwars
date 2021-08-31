import { useEffect, useState } from "react";
import { useParams } from "react-router"

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
    <div>
        <p>{character.name}</p>
        <p>{character.birth_year}</p>
        <p>{character.gender}</p>
        <p>{character.height}</p>
    </div>
)


}

export default Char;