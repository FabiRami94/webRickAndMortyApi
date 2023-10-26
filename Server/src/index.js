// const http = require('http');
// const data = require('./utils/data');
// const fs = require('fs');
const getCharById = require('./controllers/getCharById');

const express = require('express');
const morgan = require('morgan');

const server = express();
const PORT = 3001;

server.use(morgan('dev'));

server.listen(PORT, () => {
    console.log(`Server raised in port ${PORT}`)
})







/////////////////////////////////////////////////////

//Homework promesas
// http.createServer((req, res) =>{

//     res.setHeader('Access-Control-Allow-Origin', '*');
//     if(req.url.includes("/rickandmorty/character/")){
//         const id = req.url.split('/').at(-1);
//         getCharById(res, id);
//         }
// }).listen(3001, 'localhost')

////////////////////////////////////////////////////

//Homework Web Server
// http.createServer((req, res) =>{

//     res.setHeader('Access-Control-Allow-Origin', '*');
//     if(req.url.includes("/rickandmorty/character/")){
//         const id = req.url.split('/').at(-1);
//         const character = data.find((char) => char.id === parseInt(id));
//         if(character){
//             res.writeHead(200, {'Content-Type' : 'application/json'});
//             return res.end(JSON.stringify(character))
//         } else{
//             res.writeHead(404, {'Content-Type' : 'application/json'});
//             return res.end(JSON.stringify({error: 'Character not found'}));
//         }
//         }
// }).listen(3001, 'localhost')