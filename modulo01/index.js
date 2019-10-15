const express = require('express'); //express é um objeto

const server = express(); //recebe a função exportada do express

server.use(express.json());
// localhost:3000/teste
// query params = ?teste=1
// rout params = /users/1
// request body = {"name": "Lucas", "email": "lucas@lucas.com"}

// CRUD - Create, Read, Update, Delete

const users = ['Lucas', 'Celine', 'Bebê'];

server.use((req, res, next)=>{

    console.log(`Método ${req.method}; URL: ${req.url}`)

    next();

});

function checkUserExists(req, res, next){
    if (!req.body.name) {
        return res.status(400).json({ error: 'user not found on request body'});
    }

    return next();
}

function checkUserInArray(req, res, next){

    const user = users[req.params.index]

    if (!user) {
        return res.status(400).json({ error: 'user does not exists'});
    }

    req.user = user;

    return next();

}

server.get('/users',(req, res) => {
    return res.json(users);
});

server.get('/users/:index', checkUserInArray,(req, res) => {

    //const nome = req.query.nome;
    //const { index } = req.params;
    //return res.json(users[index]);
    return res.json(req.user);
});

server.post('/users', checkUserExists, (req, res) => {
    const { name } = req.body;

    users.push(name);

    return res.json(users);
});

server.put('/users/:index', checkUserExists, checkUserInArray, (req, res) =>{
    const { index }= req.params;
    const { name } = req.body;

    users[index] = name;
    return res.json(users);

});

server.delete('/users/:index', checkUserInArray, (req, res) =>{
    const { index }= req.params;

    users.splice(index, 1)
    return res.send();
});

server.listen(3000);