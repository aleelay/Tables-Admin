const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');
const url = 'mongodb://localhost/tableDB';
const app = express();
const PORT = 4000;
mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true})
const con = mongoose.connection;

con.on('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.use(express.json());

const tableRouter = require('./routes/tables');
const zoneRouter = require('./routes/zones');
app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:3000'}))
app.use('/tables', tableRouter);
app.use('/zones', zoneRouter);


app.listen(PORT, () => {
  console.log('Server is running on Port: ' + PORT);
})