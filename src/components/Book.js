import React, { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import axios from "axios";
import BookCard from "./BookCard";

const Book = () => {
  const [books, setBooks] = useState();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [bookPerPage, setBookPerPage] = useState(6);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await axios.get(
          "https://findworka.herokuapp.com/api/books"
        );
        console.log(data);
        setBooks(data);
        setLoading(false);
        return data;
      } catch (error) {}
    };

    fetchBooks();
  }, []);

  if (loading) {
    return (
      <div style={{ margin: "50vh auto" }}>
        <LoadingOutlined />
      </div>
    );
  }
  return (
    <div style={cardStyle}>
      {/*books.map((book) => (
        <BookCard book={book} />
      ))*/}

      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  );
};

export default Book;

const cardStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 400px)",
  margin: "0 150px",
  width: "50px",
};
