import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from "./actiontypes"
import axios from "axios";

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
      try{
         const response = await axios.post(endpoint, character)
         return dispatch({
            type: 'ADD_FAV',
             payload: response.data,
            });
      }catch(error){
         console.log({error: error.message})
      }
      
      //  .then(({ data }) => {
      //     return dispatch({
      //        type: 'ADD_FAV',
      //        payload: data,
      //     });
      //  });
    };
 };

 export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {

      try{
         const response = await axios.delete(endpoint)
         console.log(response);
         return dispatch({
            type: 'REMOVE_FAV',
            payload: response.data,
      });
      }catch(error){
         console.log({error: error.message})
      }
 };
}

export const filterCards = (gender) => {
    return{
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (order) => {
    return{
        type: ORDER,
        payload: order
    }
}