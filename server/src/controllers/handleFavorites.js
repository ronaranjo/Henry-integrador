let myFavorites = []

exports.postFav= (req, res) =>{
    myFavorites.push(req.body)
    console.log(req.body);

    res.status(200).json(myFavorites)
}

exports.deleteFav= (req, res) =>{

    const {id} = req.params

    myFavorites = myFavorites.filter((fav) => fav.id !== Number(id))

    res.status(200).json(myFavorites)
}