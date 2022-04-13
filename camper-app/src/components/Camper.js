import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Camper(props) {
  // initial state of modal should be closed/false (this is the first element of the array)
  // useState always returns an array with two elements
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    console.log("Clicked!");
    console.log(props.name);
    setModalIsOpen(true);
  }

    function closeModalHandler() {
      console.log("Clicked!");
      console.log(props.name);
      setModalIsOpen(false);
    }

  return (
    <div className="card">
      <div className="padding">
        <h2>{props.name}</h2>
        <div>
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
      {/* if modalIsOpen is true, display <Modal /> */}
      {modalIsOpen && (
        <Modal
          onCancel={closeModalHandler}
          onConfirm={closeModalHandler}
          name={props.name}
        />
      )}
      {modalIsOpen && (
        <Backdrop onClick={closeModalHandler} name={props.name} />
      )}
    </div>
  );
}

export default Camper;
