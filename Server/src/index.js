const http = require("http")
const getCharById = require("./controllers/getCharById")


http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
        // url => /rickyandmorty/character/id 
    if(req.url.includes("/rickandmorty/character")){
        let id = req.url.split("/").pop() //["rickyandmorty", "character", "id"] => id,  me quedo con la ultima posicion

        getCharById(res,id )
    }


 
}).listen(3001, ()=>{console.log("server port in 3001")})




// if(request.url.includes("/rickandmorty/character")){
        
//     console.log(request.url)



// let found = characters.find(
//     (character)=> character.id === Number(urlId))      
//     response.writeHead(202, {"Content-Type": "application/json"}).
//     end(JSON.stringify(found))

// }  