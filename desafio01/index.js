const express = require('express');

const server = express();

server.use(express.json());

let projects = [
    {
        id: "1",
        title: "Projeto 01",
        tasks: ["Tarefa 01"]
    },
    {
        id: "2",
        title: "Projeto 02",
        tasks: ["Tarefa 01"]
    },
    {
        id: "3",
        title: "Projeto 03",
        tasks: ["Tarefa 01"]
    }
  ];

server.get('/projects',(req, res) => {
    return res.json(projects);
});

server.listen(3000);