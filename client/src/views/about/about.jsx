import logo from '../../assets/images/RyMlogo.png'
import style from "./about.module.css"

export default function About(){
    return(
        <div className={style.main_container}>
            <img src={logo} alt="" className={style.logo}/>
            <h1 className={style.h1}>Rick And Morty card viewer</h1>
            <h2 className={style.h2}> Proyecto individual desarrollado con React-Redux por Rodrigo Naranjo</h2>

        </div>
    )
}