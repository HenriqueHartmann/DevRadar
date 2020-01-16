const express = require('express');

const app = express();

app.use(express.json());

// Métodos HTTP: GET(buscar uma informação), POST(criar uma informação), PUT(editar uma informação), DELETE(deletar um informação)

// Tipos de parâmetros:

// Query Params: request.query (Filtros, Ordenação, Paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB: (Banco de Dados - Não-relacional)

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello OmniStack' });
});

app.listen(3333);
