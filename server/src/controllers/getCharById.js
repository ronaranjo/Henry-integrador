const axios = require('axios')
const URL = `https://rickandmortyapi.com/api/character/`

exports.getCharById = async (req, res) => {
    const {id} = req.params
    try{
        const response = await axios.get(`${URL}${id}`)
       
        const ch = response.data
    
        let character ={
            id,
            name: ch.name,
            gender: ch.gender,
            species: ch.species,
            origin: ch.origin,
            image: ch.image,
            status: ch.status,
            };
        
        res.status(200).json(character)

    }catch(error){
        res.status(500).json({error: error.message})
    }
    
    

    // axios.get(`${URL}${id}`).then((response) => {
    //     if(response.data){
    //         const ch = response.data

    //         let character ={
    //             id,
    //             name: ch.name,
    //             gender: ch.gender,
    //             species: ch.species,
    //             origin: ch.origin.name,
    //             image: ch.image,
    //             status: ch.status,
    //         };

    //         res.status(200).json(character)
    //     }else{
    //         res.status(404).json({message: "Not Found"})
    //     }
    // }).catch((reason) => {
    //     res.status(500).json({message: `${reason}`})
    // })
}