
exports.up = function (knex) {
  return knex.schema.createTable("todo", (table) => {
    table.increments("todo_id").primary();
    table.string("todo");
    table.date("todo_date");
    table.time("todo_time");
    table.timestamps(true, true);
    table.string("status").notNullable().defaultTo("active");
  });
};


exports.down = function (knex) {
  return knex.schema.dropTable("todo");
};
