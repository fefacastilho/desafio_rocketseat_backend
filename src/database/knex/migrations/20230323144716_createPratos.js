
exports.up = knex => knex.schema.createTable('pratos', table => {
    table.increments('Id');
    table.text('Name');
    table.text('Description');
    table.integer('Price');
    table.text('Ingredients');
    table.text('Category');
    table.integer('user_id').references('id').inTable('adminBro');
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());

}); 


exports.down = knex.schema.dropTable('pratos'); 
