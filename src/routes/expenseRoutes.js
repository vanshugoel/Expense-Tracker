const express = require('express');
const { getExpenses, addExpense, getTotalExpenses, deleteExpense, getMonthlySummary } = require('../controllers/expenseController');
const router = express.Router();
const validateExpense = require('../middleware/validateExpense');

router.get('/', getExpenses);
router.post('/', validateExpense, addExpense);
router.get('/total', getTotalExpenses);
router.delete('/:id', deleteExpense);
router.get("/monthly-summary", getMonthlySummary);
module.exports = router;


