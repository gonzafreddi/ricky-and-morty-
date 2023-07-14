const axios = require("axios")

function getCharById(res,id){
  axios(`https://rickandmortyapi.com/api/character/${id}`)
  .then((response)=>response.data) //axios nos devuelva una promesa y para acceder hay q hacer un thn mas
  .then((data)=>{
    let characater = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin?.name,
        image: data.image,
        status: data.status
      }
     res.writeHead(200, {"Content-Type":"aplication/json"})
     res.end(JSON.stringify(characater))   
  })  
  .catch((error)=>{
    res.writeHead(500,{"Content-Type":"aplication/json"})
    res.end({error: error.message})
  })
}

module.exports = getCharById 