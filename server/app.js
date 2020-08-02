const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/tableDB';
const app = express();
const PORT = 9000;
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection;

con.on('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.use(express.json());

const tableRouter = require('./routes/tables');
app.use('/table', tableRouter);

app.listen(PORT, () => {
  console.log('Server is running on Port: ' + PORT);
})