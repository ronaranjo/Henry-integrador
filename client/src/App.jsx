import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from "./components/nav/nav.jsx"
import Form from './components/form/form';
import { useState, useEffect} from 'react';
import axios from "axios"
import{Route, Routes, useLocation, useNavigate} from "react-router-dom"
import About from './views/about/about';
import Detail from './views/detail/detail'
import Favorites from './components/favorites/Favorites';


function App() {

   const[characters, setCharacters] = useState([])

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   const login = async (userData) => {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      try{
         const response = await axios.get(URL + `?email=${email}&password=${password}`)
         const {access} = response.data
         setAccess(response.data);
         access && navigate('/home')
      }catch(error){
         console.log({error: error.message})
      }
      
      // .then(({ data }) => {
      //    const { access } = data;
      //    setAccess(data);
      //    access && navigate('/home');
      };

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearch = async (id)=>{
      

      try{
         const response = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`)

         if (response.data.name) {
            setCharacters((oldChars) => [...oldChars, response.data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }

      }catch(error){

         console.log({error: error.message})
      }

   //    .then(({ data }) => {
   //    if (data.name) {
   //       setCharacters((oldChars) => [...oldChars, data]);
   //    } else {
   //       window.alert('¡No hay personajes con este ID!');
   //    }
   // });
   }

   function onClose(id){
      setCharacters(
         characters.filter((c) =>{
            return c.id !== Number(id)
         })
      )
   }

   const location = useLocation()

   return (
     <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch} />}
        <Routes>
            <Route path='/' element={<Form login={login}></Form>}></Route>
            <Route path='/home' element={<Cards characters={characters} onClose ={onClose}/>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/detail/:id' element={<Detail></Detail>}></Route>
            <Route path='/favorites' element={<Favorites></Favorites>}></Route>
        </Routes>
        
      </div>

   );
}

export default App;
