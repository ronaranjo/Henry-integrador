require('dotenv').config();
const PORT = 3001
const server = require("./app")
const { conn } = require('./DB_connection');

// conn.sync({})
// .then(()=> {
//     server.listen(PORT, ()=> {
//         console.log('Server raised in port: ' + PORT)
//        })
// }).catch((error)=>{
//     console.log({error:error.message});
// })

try{
    server.listen(PORT, async()=> {
        console.log('Server raised in port: ' + PORT)
        await conn.sync({})
    })
    
}catch(error){
    console.log(error);
}


    
