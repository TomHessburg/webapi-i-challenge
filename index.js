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

server.get('/api/users/:id', (req,res) => {
    const id = req.params.id 

    dataBase.findById(id)
        .then(user => {
            if(user) {
                res.status(200).json(user);
            } else{
                res.status(404).json({message: "The user with the specified ID does not exist."})
            }
        })
        .catch(err => res.status(500).json({error: "The user information could not be retrieved."}))  
})

server.delete("/api/users/:id", (req,res) => {
    const id = req.params.id;

    dataBase.remove(id)
        .then(num => {
            console.log(num);
            if(num) {
                res.status(200).json(num);
            } else{
                res.status(404).json({message: "The user with the specified ID does not exist."})
            }
        })
        .catch(err => res.status(500).json({error: "The user could not be removed"}))  

})









server.listen(4000, () => {
    console.log("\n** API up and  running on port 4k **");
});