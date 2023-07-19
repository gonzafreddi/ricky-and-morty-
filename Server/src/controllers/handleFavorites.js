let myFavorites = [];


function postFav(req, res){
    const character = req.body
    myFavorites.push(character)

    res.status(200).json(myFavorites)
    console.log("se agrego personaje")

}

function deleteFav(req, res){
    const id = req.params.id

    let myFavorites= myFavorites.filter((pj)=> pj.id !== Number(id))
    res.status(200).json(myFavorites)

}


module.exports = {
    postFav, 
    deleteFav,
}