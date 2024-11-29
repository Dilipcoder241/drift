const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');
const connectToDatabase = require('./db/db');
connectToDatabase();
const userRouter = require('./routes/userRouter');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/user" , userRouter);



module.exports = app;