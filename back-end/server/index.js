const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require ('cors');
const pgp = require('pg-promise')();
const { Pool } = require('pg');

const connectionString = "postgresql://localhost:5432/marketplace";
const pool = new Pool({connectionString});

//middleware
app.use(cors());
app.use(express.json()); //going to let us use req.body
//app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());

//ROUTES
app.get("/api", (req, res) => {
    res.json({'Status': 'Server is running!'});
});

app.get("/msg", async (req, res) => {
    try {
        const newMsg = await pool.query("SELECT * FROM test");
        res.json(newMsg);
        
    } catch (error) {
        console.error(error.message);
    }
    // res.json()
});

//ROUTES TO THE DB TO GET/CREATE DATA

//create a user
app.post("/api/register", async (req, res) => {
    try {
        // console.log(req.body);
        const description = "hi message being sent from within"
        // {description} =req.body;
        const newTest = await pool.query(
            "INSERT INTO test (description ) VALUES($1)", [description]
        )
        res.json(newTest);
    } catch (err) {
        console.error(err.message);
    }
});

//get a user
app.get("/api/user/:id");

//get products
app.get("/api/products", async (req, res) => {
    try {
        const products = await pool.query("SELECT id, name, description, price, image, countinstock FROM products");
        res.json(products.rows);
    } catch (err) {
        res.json(err);
    }
});
//get product by ID
app.get("/api/product/:id", async (req, res) =>{
    try{
        const { id } = req.params;
        console.log(req.params);
        const product = await pool.query("SELECT id, name, description, price, image, countinstock FROM products WHERE id=$1", [id]);
        res.json(product.rows);
        console.log(product);

    } catch (err) {
        res.json(err);
    }
});
//create an order
app.post("api/orders")

app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`)
});