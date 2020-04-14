
exports.up = function(knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments("ID");
    tbl.string("VIN", 17).notNullable().unique();
    tbl.string("Make", 20).notNullable();
    tbl.string("Model").notNullable();
    tbl.integer("Mileage").notNullable();
    tbl.boolean("Clean Title").defaultTo(true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
