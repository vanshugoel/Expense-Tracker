# Smart Expense Tracker API

A RESTful API built with **Node.js** and **Express.js** to manage personal expenses. The API allows users to add, view, filter, calculate totals, and delete expenses. Expense data is stored in a local JSON file, eliminating the need for a database.

## Features

- Add a new expense
- View all expenses
- Filter expenses by category
- Calculate total expenses
- Calculate total expenses by category
- Delete an expense
- Input validation using Express middleware
- Monthly summary endpoint (Bonus)
- Automated testing with Jest and Supertest

## Tech Stack

- Node.js
- Express.js
- UUID
- Jest
- Supertest
- Postman

## Project Structure

```
Expense-Tracker/
│── README.md
│── AI_NOTES.md
│── package.json
│── expenses.json
│── src/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── utils/
│   └── server.js
│── tests/
│   └── expense.test.js
```

## Installation

Clone the repository:

```bash
git clone https://github.com/vanshugoel/Expense-Tracker.git
```

Move into the project directory:

```bash
cd Expense-Tracker
```

Install dependencies:

```bash
npm install
```

## Running the Server

```bash
npm start
```

For development with Nodemon:

```bash
npm run dev
```

The server runs on:

```
http://localhost:3000
```

## Running Tests

```bash
npm test
```

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/expenses` | Get all expenses |
| GET | `/expenses?category=Food` | Filter expenses by category |
| POST | `/expenses` | Add a new expense |
| GET | `/expenses/total` | Get total expenses |
| GET | `/expenses/total?category=Food` | Get total expenses for a category |
| DELETE | `/expenses/:id` | Delete an expense |
| GET | `/expenses/monthly-summary?month=2026-08` | Get monthly expense summary |

## Sample Request

```json
{
  "title": "Pizza",
  "amount": 350,
  "category": "Food",
  "date": "2026-08-01"
}
```

## Sample Response

```json
{
  "id": "generated-uuid",
  "title": "Pizza",
  "amount": 350,
  "category": "Food",
  "date": "2026-08-01"
}
```

## Validation

The API validates:

- Required fields
- Positive amount values
- Date format (`YYYY-MM-DD`)

Invalid requests return a **400 Bad Request** response.

## Testing

The project includes automated tests using **Jest** and **Supertest** covering:

- Adding expenses
- Viewing expenses
- Category filtering
- Total calculation
- Monthly summary
- Expense deletion
- Validation
