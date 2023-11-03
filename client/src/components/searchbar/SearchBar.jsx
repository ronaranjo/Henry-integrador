import style from "./searchbar.module.css"
import { useState } from "react";
import lupa from '../../assets/images/lupa.png'

export default function SearchBar(props) {

  const [id, setId] = useState("")
  
  const handleChange = (event)=>{
    setId(event.target.value)
  }

  const handleSubmit = () => {
    onSearch(id)
    setId("")
  }

  const {onSearch} = props

    return (
      <div className={style.container}>
        <input className={style.input} type="search" onChange={handleChange}/>
        <button className={style.button} onClick={handleSubmit}>Agregar</button>
      </div>
    );
  }