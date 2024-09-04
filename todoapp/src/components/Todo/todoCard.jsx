import React from "react";

const TodoCard = ({ title, body,id ,manageEdit, manageDelete}) => {
  
  
  return (
    <>
    <h3 className="display-5 fw-normal mb-0">{title}</h3>
          <br />
    <ul className="list-group list-group-horizontal rounded-0 bg-transparent">
          
      <li className="list-group-item d-flex align-items-center flex-grow-1 border-0 bg-transparent">
        <div className="d-flex flex-column w-100">
        
          <p className="ml-5">{body}</p>
        </div>
        <div className="d-flex flex-row justify-content-end">
          <a href="#!" className="text-info me-3" title="Edit todo" onClick={()=>manageEdit("block",id,title,body)}>
            <i className="fas fa-pencil-alt"></i>
          </a>
          <a href="#!" className="text-danger" title="Delete todo" onClick={()=>manageDelete(id)}>
            <i className="fas fa-trash-alt"></i>
          </a>
        </div>
      </li>
    </ul>
    </>
  );
};

export default TodoCard;
