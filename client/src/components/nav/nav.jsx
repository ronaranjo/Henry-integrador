import SearchBar from '../searchbar/SearchBar.jsx';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/RyMlogo.png"
import style from './nav.module.css'

export default function Nav(props){
    const {onSearch} = props
    return(
        <div className={style.container}>
            <div className={style.buttons}>
                <Link className={style.link_img} to="/home"><img className={style.img} src={logo} alt="" /></Link>
                <Link className={style.link} to="/about">About</Link>
                <Link className={style.link} to="/favorites">Favorites</Link>
                
            </div>
            
            <SearchBar onSearch = {onSearch}/>

            <button className={style.logout}>Log Out</button>
        </div>
        
        
    )
}