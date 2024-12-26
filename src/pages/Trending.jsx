import React, { useState } from "react";
import book1984 from "../assets/new-books-imgs/1984.jpg";
import catcherandrye from "../assets/new-books-imgs/catcherandrye.jpg";
import lessoninchem from "../assets/new-books-imgs/lessoninchem.jpg";
import midnight from "../assets/new-books-imgs/midnight.jpg";
import nightcir from "../assets/new-books-imgs/nightcir.jpg";
import prideandpre from "../assets/new-books-imgs/prideandpre.jpg";
import sevenHus from "../assets/new-books-imgs/sevenHus.jpg";
import thealchemist from "../assets/new-books-imgs/thealchemist.jpg";
import theGrateGatsby from "../assets/new-books-imgs/theGrateGatsby.jpg";
import thesong from "../assets/new-books-imgs/thesong.jpg";
import tokillmok from "../assets/new-books-imgs/tokillmok.jpg";
import wherethesing from "../assets/new-books-imgs/wherethe.jpg";

const Trending = () => {
  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic",
      description: "A novel about the American dream and the roaring 1920s.",
      imageUrl: theGrateGatsby,
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      description:
        "A haunting tale of a totalitarian regime and the dangers of surveillance.",
      imageUrl: book1984,
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Drama",
      description:
        "A story of racial injustice and childhood innocence in the Deep South.",
      imageUrl: tokillmok,
    },
    {
      id: 4,
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Philosophical",
      description: "A journey of self-discovery and the pursuit of dreams.",
      imageUrl: thealchemist,
    },
    {
      id: 5,
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      genre: "Historical Fiction",
      description:
        "A reclusive Hollywood star recounts her scandalous and glamorous life, revealing secrets of love, fame, and identity.",
      imageUrl: sevenHus,
    },
    {
      id: 6,
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      genre: "Mystery, Literary Fiction",
      description:
        "A young girl raised in isolation becomes the prime suspect in a murder case, uncovering the truths of her past and nature.",
      imageUrl: wherethesing,
    },
    {
      id: 7,
      title: "The Midnight Library",
      author: "Matt Haig",
      genre: "Fantasy, Fiction",
      description:
        "A woman is given the chance to explore alternate lives in a magical library, confronting the meaning of happiness and regret.",
      imageUrl: midnight,
    },
    {
      id: 8,
      title: "Lessons in Chemistry",
      author: "Bonnie Garmus",
      genre: "Historical Fiction, Comedy",
      description:
        "A brilliant chemist becomes the unlikely star of a 1960s cooking show, challenging societal norms and finding her voice.",
      imageUrl: lessoninchem,
    },
    {
      id: 9,
      title: "The Song of Achilles",
      author: "Madeline Miller",
      genre: "Historical Fiction, Romance",
      description:
        "A retelling of the Iliad, focusing on the deep relationship between Achilles and Patroclus, exploring love, friendship, and sacrifice.",
      imageUrl: thesong,
    },
    {
      id: 10,
      title: "The Night Circus",
      author: "Erin Morgenstern",
      genre: "Fantasy, Romance",
      description:
        "A magical competition between two young illusionists unfolds within a mysterious night circus.",
      imageUrl: nightcir,
    },
    {
      id: 11,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance, Classic",
      description:
        "A witty and timeless story of love, class, and societal expectations in 19th-century England.",
      imageUrl: prideandpre,
    },
    {
      id: 12,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Literary Fiction",
      description:
        "A coming-of-age story about a disillusioned teenager navigating the complexities of adolescence and societal hypocrisy.",
      imageUrl: catcherandrye,
    },
  ];

  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <div className="w-full min-h-screen mt-[67px] text-white backdrop-blur-sm pt-8 px-4 md:px-8 lg:px-16 fixed">
      <h1 className="mb-8 text-3xl font-bold text-center">Trending Books</h1>

      <div className="flex flex-col gap-8 md:flex-row">
        <div className="md:w-1/2 overflow-y-auto max-h-[calc(100vh-200px)]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => (
              <div
                key={book.id}
                className="flex flex-col h-full p-4 transition duration-300 bg-gray-800 rounded-md shadow-lg cursor-pointer hover:bg-gray-700"
                onClick={() => handleBookClick(book)}
              >
                <img
                  src={book.imageUrl}
                  alt={book.title}
                  className="object-cover w-full h-48 mb-4 rounded-md"
                  onError={(e) => {
                    e.target.onerror = null; // Prevents infinite loop
                    e.target.src = "https://via.placeholder.com/150x200"; // Placeholder
                  }}
                />
                <div className="flex flex-col flex-grow">
                  <h2 className="text-xl font-bold line-clamp-2">
                    {book.title}
                  </h2>
                  <p className="mt-auto text-sm text-gray-400">
                    by {book.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 overflow-y-auto max-h-[calc(100vh-200px)] bg-gray-800 rounded-md shadow-lg p-6">
          {selectedBook && (
            <div>
              <img
                src={selectedBook.imageUrl}
                alt={selectedBook.title}
                className="object-cover w-full mb-4 rounded-md max-h-96"
                onError={(e) => {
                  e.target.onerror = null; // Prevents infinite loop
                  e.target.src = "https://via.placeholder.com/300x400"; // Placeholder
                }}
              />
              <h2 className="mb-4 text-2xl font-bold">{selectedBook.title}</h2>
              <p className="mb-2 text-lg text-gray-400">
                <strong>Author:</strong> {selectedBook.author}
              </p>
              <p className="mb-2 text-lg text-gray-400">
                <strong>Genre:</strong> {selectedBook.genre}
              </p>
              <p className="text-gray-300">{selectedBook.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Trending;
