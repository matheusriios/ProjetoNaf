// Update with your config settings.

module.exports = {

    client: 'postgresql',
    connection: {
      database: 'naf',
      user:     'postgres',
      password: '@300Nascimento'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }

};
