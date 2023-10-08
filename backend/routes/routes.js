const express = require('express');

const router = express.Router();
const controller = require('../controllers/expense');
router.post('/addExpense', controller.postExpense);

router.get('/getExpense', controller.getExpense);

router.put('/editExpense', controller.updateExpense);

router.delete('/deleteExpense/:id', controller.delete);

module.exports = router;