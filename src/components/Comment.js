import React from "react";

const Comment = () => {
  return (
    <div>
      <div>
        <img src="./assets/game_throne.jpg" alt="" />
      </div>
      <form onSubmit={this.addComment}>
        <div className="field">
          <div className="control">
            <input
              type="text"
              className="input"
              name="name"
              placeholder="Your name"
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <textarea
              className="textarea"
              name="comment"
              placeholder="Add a comment"
            ></textarea>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-primary">Submit</button>
          </div>
        </div>
      </form>

      <di>
        <ul>
          <li>{}</li>
        </ul>
      </di>
    </div>
  );
};

export default Comment;
