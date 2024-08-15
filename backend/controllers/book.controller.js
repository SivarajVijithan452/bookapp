import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
    try {
        const books = await Book.find(); 
        res.status(200).json(books);
    } catch (error) {
        // Added error handling
        console.error('Error fetching books:', error); // Log the error for debugging
        res.status(500).json({ message: 'Server error' }); // Send an error response
    }
};
