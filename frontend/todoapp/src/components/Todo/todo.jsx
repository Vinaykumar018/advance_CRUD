import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addListItem, fetchListItems } from "../../Features/Counter/ListSlice";
import "./todo.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoCard from "./todoCard";
import UpdateCard from "./UpdateCard";
import { deleteListItem } from "../../Features/Counter/ListSlice";

const Todo = () => {
  const [render, setRender] = useState(0);
  const dispatch = useDispatch();
  const [updateId, setUpdateId] = useState(null);
  const [body, setBody] = useState(null);
  const [title, setTitle] = useState(null);
  const [todos, setTodos] = useState([]);
  const [showDescription, setShowDescription] = useState(false);
  const [newTodo, setNewTodo] = useState({ title: "", body: "", email: "" });

  // Fetch list items on component mount or when 'render' changes
  useEffect(() => {
    const userId = sessionStorage.getItem("id");
    if (userId) {
      dispatch(fetchListItems(userId))
        .unwrap()
        .then((data) => {
          console.log("Fetched Data:", data);
          setTodos(data); // Set the fetched data to the todos state
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [render]); // Re-fetch todos when 'render' state changes

  // Get email from session storage and set it in newTodo state
  useEffect(() => {
    const email = sessionStorage.getItem("email");
    if (email) {
      setNewTodo((prevTodo) => ({ ...prevTodo, email }));
    }
  }, []); // Runs only once when component mounts

  const notifySuccess = () => toast("Data added successfully!");
  const notifyError = () => toast.error("Error!");

  const handleAddTodo = () => {
    const { title, body, email } = newTodo;
    if (title && body && email) {
      dispatch(addListItem(newTodo))
        .then(() => {
          notifySuccess();
          setRender((prevRender) => prevRender + 1); // Increment to trigger re-fetch
          setNewTodo({ ...newTodo, title: "", body: "" }); // Reset input fields
        })
        .catch(() => {
          notifyError();
        });
    } else {
      notifyError();
    }
  };

  
  const handleEditToggle = (isVisible, id, title, body) => {
    if (id) {
      setUpdateId(id);
      setTitle(title);
      setBody(body);
      setRender((prevRender) => prevRender + 1); // Increment to force re-render
    }
    if (isVisible === "block") {
      document.getElementById("updateSection").style.display = "block";
      document.getElementById("onlyAddSection").style.display = "none";
    } else {
      document.getElementById("updateSection").style.display = "none";
      document.getElementById("onlyAddSection").style.display = "block";
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteListItem(id))
      .unwrap()
      .then(() => {
        console.log("Item deleted successfully");
  
        // Remove the deleted item from the todos state
        setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
      })
      .catch((error) => {
        console.error("Failed to delete item:", error);
      });
  };
  const handleInputChange = (e) => {
    setNewTodo({
      ...newTodo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="vh-100">
      <ToastContainer />
      <div className="container py-5 h-100" id="onlyAddSection">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div
              className="card"
              id="list1"
              style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}
            >
              <div className="card-body py-4 px-4 px-md-5">
                <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                  <i
                    className="fas fa-check-square me-1 display-4"
                    style={{ color: "red" }}
                  ></i>
                  <span className="display-4" style={{ color: "red" }}>
                    My Todo App
                  </span>
                </p>
                <div className="pb-2">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-row align-items-center">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Add new..."
                          name="title"
                          value={newTodo.title}
                          onClick={() => setShowDescription(true)}
                          onChange={handleInputChange}
                        />
                        <button
                          type="button"
                          className="btn btn-primary ml-2"
                          onClick={handleAddTodo}
                        >
                          Add
                        </button>
                      </div>
                      {showDescription && (
                        <div className="d-flex flex-row align-items-center mt-3">
                          <textarea
                            name="body"
                            className="form-control form-control-lg"
                            placeholder="Describe your task in detail"
                            value={newTodo.body}
                            onChange={handleInputChange}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="d-flex flex-column justify-content-end align-items-center mb-4 pt-2 pb-3">
                  {todos.map((todo, index) => (
                    <TodoCard
                      key={index}
                      title={todo.title}
                      body={todo.body}
                      email={todo.email}
                      id={todo._id}
                      manageDelete={handleDeleteTodo}
                      manageEdit={handleEditToggle}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="update" id="updateSection">
        {updateId ? (
          <UpdateCard
            upID={updateId}
            title={title}
            body={body}
            manageEdit={handleEditToggle}
          />
        ) : (
          ""
        )}
      </section>
    </section>
  );
};

export default Todo;
