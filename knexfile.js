// Case conversion utility
const {camelToSnake, snakeToCamel} = require('./util/knex-converters')

const postProcessResponse = result => {
  return Array.isArray(result)
  ? result.map(row => snakeToCamel(row))
  : snakeToCamel(result)
}

const wrapIdentifier = (identifier, origImpl) => origImpl(camelToSnake(identifier))

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true,
    postProcessResponse,
    wrapIdentifier
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:'
    },
    useNullAsDefault: true,
    postProcessResponse,
    wrapIdentifier,
    seeds: {
      directory: './tests/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    useNullAsDefault: true,
    postProcessResponse,
    wrapIdentifier
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    useNullAsDefault: true,
    postProcessResponse,
    wrapIdentifier
  }

};
