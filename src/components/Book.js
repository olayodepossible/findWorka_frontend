import React from "react";
import BookCard from "./BookCard";

const Book = () => {
  return (
    <div style={cardStyle}>
      {" "}
      <BookCard />
      <BookCard />
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
