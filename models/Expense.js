module.exports = (model, Schema) => {

    const Expense = new Schema({
      invoice: String,
      amount: Number,
      account: String,
      class: String,
      date: String,
      description: String
    }, { timestamps: { createdAt: 'birthday', updatedAt: 'lastUpdated' }})
    return model('Expense', Expense)
  }