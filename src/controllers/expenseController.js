const {v4 : uuidv4} = require('uuid');
const { readExpenses, writeExpenses } = require('../utils/fileHandler');

function getExpenses(req, res){
    const expenses = readExpenses();
    const { category } = req.query;

    if(category){
        const filteredExpenses = expenses.filter(expense => expense.category.toLowerCase() === category.toLowerCase());
        return res.json(filteredExpenses);
    }

    return res.json(expenses);
}

function addExpense(req, res){
    const expenses = readExpenses();

    const {title, amount, category, date} = req.body;

    const newExpense = {
        id : uuidv4(),
        title,
        amount,
        category,
        date
    };

    expenses.push(newExpense);
    writeExpenses(expenses);
    res.status(201).json(newExpense);
}

function getTotalExpenses(req, res){
    const expenses = readExpenses();
    const {category} = req.query;

    let total = 0;
    if(category){
        const filteredExpenses = expenses.filter(expense => expense.category.toLowerCase() === category.toLowerCase());
        total = filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0);
        return res.json( {total, category} );
    }
    else{
        total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
        return res.json( {total} );
    }
}

function deleteExpense(req, res){
    const expenses = readExpenses();
    const {id} = req.params;

    const updatedExpenses = expenses.filter(expense => expense.id !== id);

    if(expenses.length === updatedExpenses.length){
        return res.status(404).json({message: "Expense not found"});
    }

    writeExpenses(updatedExpenses);
    return res.status(200).json({message: "Expense deleted successfully"});
}

function getMonthlySummary(req, res){
    const expenses = readExpenses();
    const {month} = req.query;

    if(!month){
        return res.status(400).json({message: "Please provide month in YYYY-MM format"});
    }

    const monthlyExpenses = expenses.filter(expense =>
    expense.date.startsWith(month));
    
    const total = monthlyExpenses.reduce((sum, expense) => sum + expense.amount, 0);
    return res.json({ month, count: monthlyExpenses.length, expenses: monthlyExpenses, total });
}

module.exports = {
    getExpenses,
    addExpense,
    getTotalExpenses,
    deleteExpense,
    getMonthlySummary
};
