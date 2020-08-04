const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');
const url = 'mongodb://localhost/tableDB';
const app = express();
const PORT = 9000;
const path = require('path');
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





if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log('Server is running on Port: ' + PORT);
})