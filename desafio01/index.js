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

  let numberOfRequests = 0;
  
  function checkProjectExists(req, res, next) {
    const { id } = req.params;
    const project = projects.find(
        p => p.id == id
        );
  
    if (!project) {
      return res.status(400).json({ error: 'Project not found' });
    }
  
    return next();
  }
  
  function logRequests(req, res, next) {
    numberOfRequests++;
  
    console.log(`Número de requisições: ${numberOfRequests}`);
  
    return next();
  }
  
  server.use(logRequests);

server.post('/projects', (req, res) => {
    
    const { id, title } = req.body;
    const project = {
        id, 
        title, 
        tasks: []
    };

  projects.push(project);
  return res.json(project);

});

server.post('/projects/:id/tasks', (req, res) => {

    const { id } = req.params;
    const { title } = req.body;
    const project = projects.find(
        p => p.id == id
        );

    project.tasks.push(title);
    return res.json(project);

});

server.get('/projects',(req, res) => {
    return res.json(projects);
});

server.put('/projects/:id', checkProjectExists, (req, res) =>{
    
    const { id } = req.params;
    const { title } = req.body;
    const project = projects.find(
        p => p.id == id
        );

    project.title = title;
    return res.json(project);

});

server.delete('/projects/:id', checkProjectExists, (req, res) =>{
    
    const { id } = req.params;
    const projectIndex = projects.findIndex(
        p => p.id == id
        );

    projects.splice(projectIndex, 1);
    return res.send();

});

server.listen(3000);