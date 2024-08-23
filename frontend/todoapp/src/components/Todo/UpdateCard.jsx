import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateListItem } from "../../Features/Counter/ListSlice";

const UpdateCard = ({ manageEdit, upID, title, body }) => {
  console.log(upID, title, body);
  const dispatch = useDispatch();

  // State for handling form input values
  const [utitle, setTitle] = useState(title);
  const [ubody, setBody] = useState(body);

  // Update state when props change
  useEffect(() => {
    setTitle(title);
    setBody(body);
  }, [title, body]);

  // Function to handle form submission
  const updateTodo = () => {
    if (utitle && ubody) {
      const updatedItem = { title: utitle, body: ubody };
      dispatch(updateListItem({ id: upID, updatedItem }))
        .then(() => {
          console.log("Data updated successfully");
          manageEdit("none", upID, utitle, ubody); // Close the update form on success
        })
        .catch((error) => {
          console.error("Failed to update:", error);
        });
    } else {
      console.error("Title and body are required.");
    }
  };

  return (
    <div>
      <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
        <i
          className="fas fa-check-square me-1 display-4"
          style={{ color: "red" }}
        ></i>
        <span className="display-4" style={{ color: "red" }}>
          Update your Todo App
        </span>
      </p>
      <div className="pb-2">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-row align-items-center">
              <input
                type="text"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Update title..."
                name="title"
                value={utitle}
                onChange={(e) => setTitle(e.target.value)} // Update state on input change
              />
              <button
                type="button"
                className="btn btn-primary ml-2"
                onClick={updateTodo} // Call update function on click
              >
                Update
              </button>
            </div>
            <div className="d-flex flex-row align-items-center mt-3">
              <textarea
                type="text"
                name="body"
                className="form-control form-control-lg"
                id="exampleFormControlInput2"
                value={ubody}
                placeholder="Update your task..."
                onChange={(e) => setBody(e.target.value)} // Update state on input change
              />
            </div>
          </div>
          <button
            type="button"
            className="btn btn-danger mt-2"
            onClick={() => manageEdit("none")}
            // Close the form without updating
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateCard;
