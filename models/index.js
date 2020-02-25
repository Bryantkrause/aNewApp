const { model, Schema } = require('mongoose')

module.exports = {
  Expense: require('./Expense.js')(model, Schema)
}