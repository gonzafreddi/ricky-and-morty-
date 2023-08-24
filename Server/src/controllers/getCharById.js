const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/"

function getCharById(req, res){
  const {id} = req.params

  axios(`${URL}${id}`)
  .then(({data})=>{
    if(data.error){
      console.log("error 404")
      return res.status(404).send(data.error)
    }
     const characater = {
        id: Number(data.id),
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin.name,
        image: data.image,
        status: data.status
      }
    return  res.status(200).json(characater) 
  })  
  .catch((error)=>{ 
    // no pude hacer la solicitud
   res.status(500).send(error.message)
   console.log("no pude hacer la solicitud")
  })
}

module.exports = getCharById 