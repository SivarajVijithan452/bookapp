import mongoose from  "mongoose";

const bookSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    description: String,
    image: String,
    title: String
});
const Book = mongoose.model('Book', bookSchema);

export default Book;