const {Favorite} = require("../DB_connection")

const postFav = async (req, res) => {
    const{id, name, origin, status, image, species, gender} = req.body
    if(!id || !name || !origin || !status || !image || !species ||!gender){
        return res.status(401).json({error: "Faltan datos"})
    }

    try {
        const [fav, created] = await Favorite.findOrCreate({
            where: {id, name, origin, status, image, species, gender},
        })

        if(!created){
            return res.status(409).json({error: "Favorito ya registrado"})
        }

        const allFavs = await Favorite.findAll()
        if(!created){
            return res.status(409).json({error: "Email ya registrado"})
        }

        return res.status(200).json(allFavs)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports= {
    postFav
}