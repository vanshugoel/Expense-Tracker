function validatExpense(req, res, next){
    const { title, amount, category, date } = req.body;

    if(title === undefined || amount === undefined || category === undefined || date === undefined){
        return res.status(400).json({message: "All fields are required"});
    }

    if(typeof amount !== 'number' || amount <= 0){
        return res.status(400).json({message: "Amount must be a positive number"});
    }

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if(!dateRegex.test(date)){
        return res.status(400).json({message: "Date must be in YYYY-MM-DD format"});
    }

    next();
}

module.exports = validatExpense;