const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const barajRoutes = require('./routes/Barajlar');
const ilRoutes = require('./routes/Iller');
const sulamaRoutes = require('./routes/Sulama');
const cors = require('cors');
const parser = require('body-parser');

dotenv.config();
const app = express();
const port = 3001;

app.use(parser.json({limit:"30mb", extends:true})); 
app.use(parser.urlencoded({limit:"30mb", extends:true}));
app.use(cors());
app.use(express.json());

dotenv.config();

console.log('MONGO_URL:', process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
})
    .then(() => console.log('DB connected'))
    .catch((err) => console.log(err));

app.use('/baraj', barajRoutes);
app.use('/il', ilRoutes);
app.use('/sulama', sulamaRoutes);

app.listen(port, () => {
    console.log(`Server is listening on ${port}.`);
});
