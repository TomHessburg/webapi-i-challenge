// implement your API here
const express = require("express");

const dataBase = require("./data/db.js");

const server = express();

server.use(express.json());





server.post('/api/users', (req, res) => {

    const newUser = req.body;

    if(newUser.name && newUser.bio){ 
        dataBase.insert(newUser)
            .then(user => {
                res.status(201).json(user);
            })
            .catch(err => res.status(500).json({message: 'error adding new user'}))
    }else{
        res.status(400).json({errorMessage: "Please provide name and bio for the user."});
    }
})

server.get('/api/users', (req,res) => {
    dataBase.find()
        .then(user => res.status(200).json(user))
        .catch(err => res.status(500).json({ error: "The users information could not be retrieved." }))

})











server.listen(4000, () => {
    console.log("\n** API up and  running on port 4k **");
});