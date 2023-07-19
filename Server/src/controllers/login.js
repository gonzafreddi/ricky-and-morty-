const users = require("../utils/users")

const login = (req, res)=>{
const {email, password} = req.query// recibi por query al use
const foundUser= users.find((user)=> user.email === email && user.password === password)

const access = foundUser ? true : false
console.log(`este es el console log de la funcion de log #${access}`)
res.status(200).json({access})

}



module.exports = login


