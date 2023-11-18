const {User} = require("../DB_connection")
const postUser = async (req, res) => {
    const {email, password} = req.body

    if(!email || !password){
        
        return res.status(400).json({error: "Faltan datos"})
    }

    try {
        const [user, created] = await User.findOrCreate({
            where: {email},
            defaults: {
                password,
            }
        })

        if(!created){
            return res.status(409).json({error: "Email ya registrado"})
        }

        return res.status(200).json(user)
    } catch (error) {
        res.status(500).json({error: error.message})
    }

}

module.exports = {
    postUser
}