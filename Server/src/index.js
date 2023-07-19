const express = require("express")
const getCharById = require("./controllers/getCharById")
const server = express()
const PORT = 3001
const morgan = require("morgan")
const router = require("./routes/index")

server.use(express.json())
server.use(morgan("dev"))

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });


server.use("/rickandmorty", router)


server.listen(PORT, ()=>{
    console.log(`server raised in port: ${PORT}`)
})


// http.createServer((req, res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//         // url => /rickyandmorty/character/id 
//     if(req.url.includes("/rickandmorty/character")){
//         let id = req.url.split("/").pop() //["rickyandmorty", "character", "id"] => id,  me quedo con la ultima posicion

//         getCharById(res,id )
//     }


 
// }).listen(3001, ()=>{console.log("server port in 3001")})




// if(request.url.includes("/rickandmorty/character")){
        
//     console.log(request.url)



// let found = characters.find(
//     (character)=> character.id === Number(urlId))      
//     response.writeHead(202, {"Content-Type": "application/json"}).
//     end(JSON.stringify(found))

// }  