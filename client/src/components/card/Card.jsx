import style from "./card.module.css"
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import {useState, useEffect} from "react"
import { connect } from "react-redux"

function Card(props) {
   const {
      id,
      name,
      status,
      species,
      gender,
      // origin,
      image,
      onClose,
      addFav,
      removeFav,
      myFavorites,
    } = props;

   const[isFav, setIsFav] = useState(false)

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         removeFav(id)
         
      }else{
         setIsFav(true)
         addFav(props)
      }
   }

   function statusStyle(status){
      if(status === "Alive"){
         return(
         <div className={style.alive}>
            <h2>{status}</h2>
         </div>
         ) 
         
      }
      return(
      <div className={style.dead}>
         <h2>{status}</h2>
      </div>)
      
   }

   return (
      <div className={style.main_container}>
         
         <div className={style.container_1}>
            <button className={style.cerrar} onClick={()=>{onClose(props.id)}}>X</button>
            <Link className={style.link}  to={`/detail/${id}`}>
            <h2 className={style.name}>{name}</h2>
            </Link>   
         </div>

         <div className={style.container_2}>

            <img className={style.image}src={image} alt='' />

            <div className={style.attributes}>
               <h2 className={style.text}>{species}</h2>
               <h2 className={style.text}>{gender}</h2>
               <h2 className={style.text}>{origin.name}</h2>
               {
                  isFav ? (
                     <button onClick={handleFavorite}>❤️</button>
                  ) : (
                     <button onClick={handleFavorite}>🤍</button>
                  )
               }
            </div>

            {statusStyle(status)}
            
         </div>
      </div>
   );

}

const mapDispatchToProps = (dispatch) => {
   return{
      addFav: (character) =>{
         dispatch(addFav(character))
      },
      removeFav: (id) =>{
         dispatch(removeFav(id))
      }
   }
}

const mapStateToProps = (state)=>{
   return{ myFavorites: state.myFavorites }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
