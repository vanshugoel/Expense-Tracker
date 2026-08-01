const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../../expenses.json");

function readExpenses(){
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
}

function writeExpenses(expenses){
    fs.writeFileSync(
        filePath,
        JSON.stringify(expenses, null, 2)
    );
}

module.exports = {
    readExpenses,
    writeExpenses
};