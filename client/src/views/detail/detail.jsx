import axios from "axios"
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react"
import style from "./detail.module.css"
export default function Detail(){

    const {id} = useParams()
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
          ({ data }) => {
            if (data.name) {
              setCharacter(data);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          }
        );
        return setCharacter({});
      }, [id]);
    
    return(
        <div className={style.main_container}>
          

          <div className={style.info}>
            <img className={style.img} src={character.image} alt="" />

            <div className={style.titles}>
                <h2 className={style.name}>{character.name}</h2>
                <h2 className={style.text}>Specie - {character.species}</h2>
                <h2 className={style.text}>Gender - {character.gender}</h2>
                <h2 className={style.text}>Status - {character.status}</h2>
            </div>
          </div>
            
        </div>
    )
}