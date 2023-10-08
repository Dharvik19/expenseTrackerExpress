const Expense = require('../models/expense');



exports.postExpense=((req, res, next)=>{
    const {expense, description, category} = req.body;

    console.log(expense,description,category);

    Expense.create({expense, description, category})
    .then((response)=>{
        res.status(201).json({data : response})
    })
    .catch(err=>{
        console.log(err);
    })
});

exports.getExpense=((req, res, next)=>{
    Expense.findAll()
    .then(response=>{
        res.status(200).json({response});
    })
    .catch((err)=>{
        console.log(err);
    })
})


exports.updateExpense = (req, res, next) => {
    const id = req.params.id; 
    const { expense, description, category } = req.body;

    Expense.update(
        { expense, description, category },
        { where: { id: id } }
    )
        .then((result) => {
            if (result[0] === 1) {
                res.status(200).json({ msg: 'Record updated successfully' });
            } else {
                res.status(404).json({ msg: 'Record not found' });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ msg: 'Internal server error' });
        });
};

exports.delete = ((req, res, next)=>{
    const id = req.params.id;
    Expense.destroy({where: {id : id}})
    .then(response=>{
        res.status(200).json({msg : "Successful"});
    })
    .catch((err)=>{
        console.log(err);
    })
})