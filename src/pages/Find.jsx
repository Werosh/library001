import React, { useState } from "react";
import Footer from "../components/Footer";
import book1984 from "../assets/new-books-imgs/1984.jpg";
import catcher from "../assets/new-books-imgs/catcherandrye.jpg";
import nightcir from "../assets/new-books-imgs/nightcir.jpg";
import pride from "../assets/new-books-imgs/prideandpre.jpg";
import greatGatsby from "../assets/new-books-imgs/theGrateGatsby.jpg";
import toKillMockingbird from "../assets/new-books-imgs/tokillmok.jpg";

const Find = () => {
  // Sample data for new arrivals
  const newBooks = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      image: greatGatsby,
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      image: book1984,
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      image: toKillMockingbird,
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      image: pride,
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      image: catcher,
    },
    {
      id: 6,
      title: "The Night Circus",
      author: "Erin Morgenstern",
      image: nightcir,
    },
  ];

  // Sample data for old stock
  const oldBooks = [
    { id: 6, title: "War and Peace", author: "Leo Tolstoy" },
    { id: 7, title: "Moby-Dick", author: "Herman Melville" },
    { id: 8, title: "Crime and Punishment", author: "Fyodor Dostoevsky" },
    { id: 9, title: "Jane Eyre", author: "Charlotte Bronte" },
    { id: 10, title: "Wuthering Heights", author: "Emily Bronte" },
    { id: 11, title: "Pride and Prejudice", author: "Jane Austen" },
    { id: 12, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 13, title: "Moby-Dick", author: "Herman Melville" },
    { id: 14, title: "Crime and Punishment", author: "Fyodor Dostoevsky" },
    { id: 15, title: "Jane Eyre", author: "Charlotte Brontë" },
    { id: 16, title: "Frankenstein", author: "Mary Shelley" },
    { id: 17, title: "The Picture of Dorian Gray", author: "Oscar Wilde" },
    { id: 18, title: "Dracula", author: "Bram Stoker" },
    { id: 19, title: "The Scarlet Letter", author: "Nathaniel Hawthorne" },
  ];

  // Search state for old books
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered old books based on search term
  const filteredOldBooks = oldBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="w-full h-auto mt-[60px] overflow-auto backdrop-blur-[5px] flex flex-col items-center p-6 ">
        {/* New Arrivals Section */}
        <h1 className="mb-6 text-3xl font-bold text-white">New Arrivals</h1>
        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 mb-12 sm:grid-cols-2 lg:grid-cols-3">
          {newBooks.map((book) => (
            <div
              key={book.id}
              className="flex flex-col items-center p-4 text-center transition-transform transform bg-gray-800 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-32 h-40 mb-4 rounded-md shadow-sm"
              />
              <h2 className="mb-2 text-xl font-semibold text-white">
                {book.title}
              </h2>
              <p className="text-gray-400">{book.author}</p>
            </div>
          ))}
        </div>

        {/* Old Stock Section */}
        <h1 className="mb-4 text-3xl font-bold text-white">Old Stock</h1>
        <input
          type="text"
          placeholder="Search by title or author..."
          className="w-full max-w-md px-4 py-2 mb-6 text-black rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul className="w-full max-w-6xl p-4 bg-gray-800 divide-y divide-gray-700 rounded-lg shadow-lg">
          {filteredOldBooks.length > 0 ? (
            filteredOldBooks.map((book) => (
              <li
                key={book.id}
                className="flex items-center justify-between py-2"
              >
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {book.title}
                  </h3>
                  <p className="text-gray-400">{book.author}</p>
                </div>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-400">No books found.</p>
          )}
        </ul>
      </div>

      <Footer />
    </>
  );
};

export default Find;
