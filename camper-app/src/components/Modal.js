function Modal(props) {

    function cancelHandler() {
        props.onCancel();
    }

        function confirmHandler() {
          props.onConfirm();
        }

  return (
    <div className="modal padding">
      <p className="modal-text">
        Are you sure you want to delete this Camper:{" "}
        <strong>{props.name}</strong>?
      </p>
      <button className="btn btn-row" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn btn-row" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
