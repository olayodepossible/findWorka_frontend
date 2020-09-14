import React from "react";
import { Link } from "react-router-dom";
const Comment = () => {
  const handleSubmit = () => {
    console.log("here I am");
  };

  return (
    <div style={{ position: "relative" }}>
      <Link to="/">
        <button style={backButton}>Back</button>
      </Link>
      <div style={{ padding: "20px 0" }}>
        <img src="./assets/game_throne.jpg" alt="" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="control">
          <textarea
            className="textarea"
            style={styleTextarea}
            name="comment"
            placeholder="Add a comment"
          ></textarea>
        </div>

        <div className="control">
          <button style={styleButton}>Submit</button>
        </div>
      </form>

      {/*<div>
        <ul>
          <li>{}</li>
        </ul>
      </div>*/}
    </div>
  );
};

export default Comment;

const styleTextarea = {
  padding: "7px",
  borderRadius: "3px",
  border: "1px solid #ccc",
};

const styleButton = {
  padding: "7px",
  borderRadius: "3px",
  border: "1px solid #ccc",
  marginTop: "10px",
};

const backButton = {
  position: "absolute",
  right: "50px",
  top: "20px",
  padding: "7px 10px",
  borderRadius: "3px",
  border: "1px solid #ccc",
  backgroundColor: "rgb(43, 144, 202)",
  color: "#fff",
};
