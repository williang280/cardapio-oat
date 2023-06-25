const express = require('express');

const server = express();

server.use(express.json());

const menu = ['bbqs', 'best-foods', 'breads', 'burgers', 'chocolates', 
'desserts', 'drinks', 'fried-chicken', 'ice-cream', 'our-foods',
'pizzas','porks','sandwiches','sausages','steaks'];

// Realiza a listagem de itens do menu
server.get('/menu/:index', (req, res) => {
    const { index } = req.params;

    return res.json(menu[index]);
});

// Raliza o retorno de todos os itens
server.get('/menu', (req, res) => {
    return res.json(menu);
});

// Insere
server.post('/menu', (req, res) => {
    const { name } = req.body;
    menu.push(name);

    return res.json(menu);
});

// Atualiz
server.put('/menu/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    menu[index] = name;

    return res.json(menu);
});

// Deleta
server.delete('/menu/:index', (req, res) => {
    const { index } = req.params;

   menu.splice(index, 1);
   return res.json({ message: "O item foi deletado" });
});

server.listen(3000, () => {
    console.log('Servidor Funcionando')
});