import React from "react";
import { Link } from "react-router-dom";
import { CommentOutlined, UsergroupAddOutlined } from "@ant-design/icons";

const BookCard = ({ book: { name, comments_count, authors } }) => {
  return (
    <div className="card" style={bookCard}>
      {" "}
      <div>
        <img src="./assets/game_throne.jpg" alt="" />
      </div>{" "}
      <h3>Tiltle: {name}</h3>
      <h4>Author: {}</h4>
      <h4>Released date: {}</h4>
      <div style={{ position: "relative" }}>
        <Link to="/comment">
          <span
            className="count"
            id="comment"
            style={count}
            // onClick={showComment}
          >
            {comments_count}
          </span>
        </Link>
        <CommentOutlined style={{ fontSize: "30px", marginRight: "20px" }} />
        <span className="count" id="character" style={count}>
          {authors.length}
        </span>
        <UsergroupAddOutlined style={{ fontSize: "30px" }} />
      </div>
    </div>
  );
};

export default BookCard;

const bookCard = {
  margin: "20px",
  backgroundColor: "#fff",
  padding: "20px 0 20px 0",
};

const count = {
  position: "absolute",
  backgroundColor: "red",
  borderRadius: "50%",
  color: "#fff",
  top: "-10px",
  width: " 20px",
};
