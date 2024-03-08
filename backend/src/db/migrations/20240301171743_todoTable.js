/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("todo", (table) => {
      table.increments("todo_id").primary();
      table.integer("user_id").references("user_id").inTable("users");
      table.string("todo_item");
      table.date("todo_date");
      table.time("todo_time");
      table.timestamps(true, true);
      table.string("status").notNullable().defaultTo("active");
    });
  };
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
  exports.down = function (knex) {
    return knex.schema.dropTable("todo");
  };