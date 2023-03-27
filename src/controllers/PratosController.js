const knex = require("../database/knex");

class PratosController{
    async create(request, response){
        const{ title, description} = request.body;
        const { user_id} = request.params;

        const pratos = await knex('pratos').insert({
            title,
            description,
            user_id,
        })
     
     return response.json();
    }
}

module.exports = PratosController;