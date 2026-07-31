const express = require('express');
const expenseRoutes = require('./routes/expenseRoutes');
const app = express();
const port = 3000;

app.use(express.json());
app.use('/expenses', expenseRoutes);

app.get('/', (req, res) => {
    res.send("Expense Tracker API is running");
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})


