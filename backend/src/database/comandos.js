
/**
 * Video pausado em 00:52
 */

/**
 * Rota / Recurso
*/

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end 
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

/**
 * Banco de dados
 * 
 * Driver: select * from users
 * Query Builder: table('users').select('*').where();
 *  Usaremos o knex como Query Builder
 *      npm install knex
 *      npm install sqlite3
 *      npx knex init 
 */

/* 
app.get('/', (request, response) => { 
    response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Jeferson Leskevicius'
    });
});

app.get('/users/:id', (request, response) => {
   const params =  request.params;
   console.log(params);

   return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Jeferson Leskevicius'
    });
});

app.post('/users', (request, response) => {
    const body = request.body;
    console.log(body);
    return response.json({mensagem: 'ok'});
}); 
*/

/**
 * 
 * npx knex migrate:make create_ongs  // Cria o arquivo
 * npx knex migrate:latest            // Roda os comandos
 *  
 * 
 */ 
