require('dotenv').config()

const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions)) // Use this after the variable declaration

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

const notesRouter = require('./routes/notes');
app.use('/notes', notesRouter);

app.listen(5000, () => console.log('Server Started'));