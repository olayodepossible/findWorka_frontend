import React from "react";
import { Link } from "react-router-dom";
const Comment = () => {
  const handleSubmit = () => {
    console.log("here I am");
  };

  return (
    <div>
      <Link to="/">
        <span>Back</span>
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
  //   width: "100%",
  padding: "7px",
  borderRadius: "3px",
  border: "1px solid #ccc",
};

const styleButton = {
  //   width: "100%",
  padding: "7px",
  borderRadius: "3px",
  border: "1px solid #ccc",
  marginTop: "10px",
};
