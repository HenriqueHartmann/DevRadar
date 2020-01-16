const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0-g1wqx.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
});

app.use(express.json());
app.use(routes);

// Métodos HTTP: GET(buscar uma informação), POST(criar uma informação), PUT(editar uma informação), DELETE(deletar um informação)

// Tipos de parâmetros:

// Query Params: request.query (Filtros, Ordenação, Paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB: (Banco de Dados - Não-relacional)

app.listen(3333);
