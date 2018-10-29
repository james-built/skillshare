const db = require('../../server/db/users')
const testEnv = require('../test-environment')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => {
  testEnv.cleanup(testDb)
})

test('knex camelCase conversion works', () => {
  return db.getUser(1001, testDb)
    .then(user => {
      let fields = Object.keys(user)
      // eslint-disable-next-line no-console
      console.log(fields)
      for (let i in fields) {
        expect(i).not.toMatch(/_/)
      }
    })
})
