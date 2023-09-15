import express from 'express';
import { Books } from '../models/bookModel.js';
const router = express.Router();

// create a new Books Record in Database
router.post('/', async (req, res) => {
    try {
        // if all fields 
        if (!req.body.author ||
            !req.body.title ||
            !req.body.publishYear) {
            return res.status(400).send(
                { message: "Send all required Fields: title, author, publishYear" }
            );
        }

        // creating ctructure of data
        const newBooks = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        };

        // entry data in database
        const books = await Books.create(newBooks);
        return res.status(201).send(books);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// route for get all Bookss from Database
router.get('/', async (req, res) => {
    try {
        const books = await Books.find({});
        return res.status(201).send({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// route for get one book from database by id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Books.findById(id);
        return res.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// route for update book data
router.put('/:id', async (req, res) => {
    try {
        if (!req.body.author ||
            !req.body.title ||
            !req.body.publishYear) {
            return res.status(400).send({ message: 'All Fields are require: title,author, publishYear' });
        }

        const { id } = req.params;

        const result = await Books.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).json({ message: 'Book not found' });
        }

        return res.status(200).send({ message: 'Book updated Successfully' });

    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: error.message });
    }
})

// route for Delete Book Data
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Books.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: 'Book not found' });
        }

        return res.status(200).send({ message: 'Book deleted Successfully' });

    } catch (err) {
        console.log(err);
        res.status(500).send({ message: err.message });
    }
});

export default router;