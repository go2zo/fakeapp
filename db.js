const faker = require('faker')
const _ = require('lodash')
const { variableCandidate } = require('./db_candidate/variableHints.json')
const amount = 100;

faker.locale = 'ko'

module.exports = () => {
  return {
    templates: _.times(amount, (idx) => {
      let variableHints = _.sampleSize(variableCandidate, _.random(3))
      let content = faker.lorem.text()
      _.replace(faker.lorem.text(), '.', )

      faker.lorem.lines()

      return {
        id: faker.datatype.uuid(),
        title: faker.name.title(),
        category: faker.company.companySuffix(),
        content: content,
        variableHints: variableHints,
      }
    })
  }
}

