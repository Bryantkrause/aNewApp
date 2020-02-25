const { Expense } = require('../models')

module.exports = app => {
        // retrieve all Expense data
        app.get('/api/expenses', (req, res) => {
                Expense.find()
                .then(expense => res.json(expense))
                .catch(e => console.log(e))
        })

        // retrieve one Expense transaction
        app.get('/api/expenses/:id', (req, res) => {
                Expense.findOne({ _id: req.params.id })
                    .then(expense => res.json(expense))
                    .catch(e => console.log(e))
            })

                    // retrieve one all for an account
        app.get('/api/expenses/:account', (req, res) => {
                MyModel.find({ account: req.body.account})
                    .then(expense => res.json(expense))
                    .catch(e => console.log(e))
            })

                // add an expense item
    app.post('/api/expenses', (req, res) => {
            console.log(req.body)
        Expense.create(req.body) 
                    .then(expense => res.json(expense))
                    .catch(e => console.log(e))
            })

        // update one an expense item
        app.put('/api/expenses/:id', (req, res) => {
                Expense.updateOne({ _id: req.params.id }, { $set: req.body })
                    .then(expense => res.json(expense))
                    .catch(e => console.log(e))
        
            })

                // remove an expense item
    app.delete('/api/expenses/:id', (req, res) => {
        Expense.deleteOne({ _id: req.params.id })
            .then(expense => { res.json(expense) })
            .catch(e => console.log(e))

    })


}