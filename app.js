// app.js
const express = require('express');
const connectDB = require('./config/db')
var cors = require('cors');

//routes
const manga = require('./routes/Api/manga');
const app = express();

//Connect to database
connectDB();

app.use(cors({origin: true, credentials: true}));

app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('Hello world!'));

app.use('/Api/manga', manga);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));

