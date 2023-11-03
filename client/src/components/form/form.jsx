import style from './form.module.css'
import logo from '../../assets/images/RyMlogo.png'
import background from '../../assets/images/form_bg.png'
import { useState } from 'react'
import validation from './validation'

export default function Form(props){

    const {login} = props

    const [userData, setUserData] = useState({
        email:'',
        password:'',
    })

    const[errors, setErrors] = useState({})

    function handleChange(event){
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property]:value})
        validation({...userData, [property]:value},errors, setErrors)
    }

    function handleSubmit(event){
        event.preventDefault()
        login(userData)
    }

    return(
        <div className={style.main}>
            <div className={style.about}> 
                <img className={style.bg} src={background} alt="" />
                <p className={style.bg_p}>Rick and morty card viewer</p>
            </div>

            <form className={style.container}>

                <img className={style.logo} src={logo} alt="" />

                <div className={style.input_container} >

                    <label className={style.label} htmlFor="email">Email</label>
                    <input className={style.input} type="email" name='email' value={userData.email} onChange={handleChange}/>
                    <p className={style.error}>{errors.email}</p>
                </div>

                <div className={style.input_container}>

                    <label className={style.label} htmlFor="password">Password</label>
                    <input className={style.input} type="password" name='password' value={userData.password} onChange={handleChange}/>
                    <p className={style.error}>{errors.password}</p>
                </div>


                <button onClick={handleSubmit} className={style.button} type="submit">SUBMIT</button>
            </form>
        </div>
    )
}