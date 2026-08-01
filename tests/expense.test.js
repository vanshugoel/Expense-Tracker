const request = require('supertest');
const fs = require('fs');
const path = require('path');
const app = require('../src/server');

const filePath = path.join(__dirname, "../expenses.json");

beforeEach(() => {
    fs.writeFileSync(
        filePath,
        JSON.stringify([], null, 2))
});

test("GET /expenses should return an empty array initially", async () => {

    const res = await request(app).get("/expenses");

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);

});

test("POST /expenses should create a new expense", async () => {

    const expense = {
        title: "Pizza",
        amount: 350,
        category: "Food",
        date: "2026-08-01"
    };

    const res = await request(app)
        .post("/expenses")
        .send(expense);

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Pizza");
    expect(res.body).toHaveProperty("id");

});

test("POST /expenses should return 400 for invalid data", async () => {

    const res = await request(app)
        .post("/expenses")
        .send({
            title: "",
            amount: -100,
            category: "",
            date: "01-08-2026"
        });

    expect(res.statusCode).toBe(400);

});

test("GET /expenses?category=Food filters correctly", async () => {

    await request(app)
        .post("/expenses")
        .send({
            title: "Pizza",
            amount: 300,
            category: "Food",
            date: "2026-08-01"
        });

    await request(app)
        .post("/expenses")
        .send({
            title: "Uber",
            amount: 150,
            category: "Travel",
            date: "2026-08-01"
        });

    const res = await request(app)
        .get("/expenses?category=Food");

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
    expect(res.body[0].category).toBe("Food");

});

test("GET /expenses/total returns total amount", async () => {

    await request(app)
        .post("/expenses")
        .send({
            title: "Pizza",
            amount: 300,
            category: "Food",
            date: "2026-08-01"
        });

    await request(app)
        .post("/expenses")
        .send({
            title: "Uber",
            amount: 200,
            category: "Travel",
            date: "2026-08-01"
        });

    const res = await request(app)
        .get("/expenses/total");

    expect(res.statusCode).toBe(200);
    expect(res.body.total).toBe(500);

});

test("DELETE /expenses/:id deletes an expense", async () => {

    const create = await request(app)
        .post("/expenses")
        .send({
            title: "Pizza",
            amount: 300,
            category: "Food",
            date: "2026-08-01"
        });

    const id = create.body.id;

    const del = await request(app)
        .delete(`/expenses/${id}`);

    expect(del.statusCode).toBe(200);

});