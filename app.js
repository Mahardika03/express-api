const express = require('express');
const app = express();
const port = 3000;
const TodoController = require('./src/controller/TodoController');

app.use(express.json());

//port to run a server nodejs express
app.listen(port, () => {
    console.log(`Example app listening at https://localhost:${port}`);
});

//get data first request
app.get('/', (req, res) => {
    res.send("first request");
});


app.get('/todos/', TodoController.get); //controller get todos data
app.get('/todos/:id', TodoController.getById); //controller get todos data with id
app.post('/todos/', TodoController.create); //controller send data to db
app.put('/todos/:id', TodoController.update);
app.delete('/todos/:id', TodoController.delete);

const {Sequelize} = require('sequelize');
const db = require('./src/config/database')
const sequelizedb = new Sequelize(db.development);

try {
    sequelizedb.authenticate();
    console.log('Connection has been established successfully');
} catch (error) {
    console.log('Unable to connect to the database : ', error);
}