import Card from '../card/Card';
import style from "./cards.module.css"

export default function Cards(props) {
   const {characters, onClose} = props
   return <div className={style.container}>
      {characters.map((character) => {
         return(
            <Card id = {character.id}
            name = {character.name}
            status = {character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose = {onClose}
            />
         )
      })}
   </div>;
}
