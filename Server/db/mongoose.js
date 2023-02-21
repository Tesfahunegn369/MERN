/*
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/MERN_Tesfish',
{
  userNewUrlParser: true,
  useUnifiedTopology: true  
}).then(() => {
    console.log('connection successful');
}).catch((error) =>{
    console.log('something wrong', error);
})
*/
/*
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'MERN_Tesfish';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});
*/


const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/MERN_Tesfish'
mongoose.connect(url, { useNewUrlParser: true })

const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})


