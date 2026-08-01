const express = require("express");
const expenseRoutes = require("./routes/expenseRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/expenses", expenseRoutes);

app.get("/", (req, res) => {
    res.send("Expense Tracker API is running");
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

// Export app for testing
module.exports = app;