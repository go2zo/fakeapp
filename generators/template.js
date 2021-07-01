const faker = require('faker')
const _ = require('lodash')
const amount = 100

faker.locale = 'ko'

const func = next => create => {
  const path = `template/templates.json`
  const data = (n) => {
    let temp = []
    for (let i = 0; i < n; i++) {
      temp.push({
        id: faker.datatype.uuid()
      })
    }
    return temp
  }

  create({ data: { templates: data(amount) }, path: path })
  next(create)
}

module.exports = func