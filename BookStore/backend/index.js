import express from 'express';
import mongoose from 'mongoose';
import booksRoute from './routes/bookRoutes.js';
import cors from 'cors';
const app = express();
const PORT = 8000;

// CONNECTIONG DATABASE
mongoose.connect('mongodb://127.0.0.1:27017/Bookss-store')
    .then(() => console.log('mongoDB is Connected'))
    .catch((err) => console.log('MongoDB is not Connected', err))


// MIDDLEWARES for Parsing Request Body    
app.use(express.json());
app.use(cors());   // for prevent CORS error

// ROUTES    

app.get('/', (req, res) => {
    return res.send("Hello From Server").status(200);
})

app.use('/books', booksRoute);

app.listen(PORT, () => {
    console.log(`Server is Running on Port: ${PORT}`);
});