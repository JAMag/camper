import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewMessageForm.module.css";

function NewMessageForm(props) {
  const subjectInputRef = useRef();
  const dateInputRef = useRef();

  const timeInputRef = useRef();
  const fromInputRef = useRef();
  const camper_nameInputRef = useRef();
  const campInputRef = useRef();
  const shipment_statusInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const message_textInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredSubject = subjectInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredTime = timeInputRef.current.value;
    const enteredFrom = fromInputRef.current.value;
    const enteredCamper_name = camper_nameInputRef.current.value;
    const enteredCamp = campInputRef.current.value;
    const enteredShipment_status = shipment_statusInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredMessage_text = message_textInputRef.current.value;

    const messageData = {
      subject: enteredSubject,
      date: enteredDate,
      time_submitted: enteredTime,
      from: enteredFrom,
      camper_name: enteredCamper_name,
      camp: enteredCamp,
      shipment_status: enteredShipment_status,
      image: enteredImage,
      address: enteredAddress,
      message_text: enteredMessage_text,
    };

    console.log(messageData);

    props.onAddMessage(messageData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label html_for="date">Date</label>
          <input type="date" required id="date" ref={dateInputRef} />
        </div>

        <div className={classes.control}>
          <label html_for="time">Time</label>
          <input type="time" required id="time" ref={timeInputRef} />
        </div>

        <div className={classes.control}>
          <label html_for="from">From</label>
          <input type="text" required id="from" ref={fromInputRef} />
        </div>

        <div className={classes.control}>
          <label html_for="camper_name">Camper Name</label>
          <input
            type="text"
            required
            id="camper_name"
            ref={camper_nameInputRef}
          />
        </div>

        <div className={classes.control}>
          <label html_for="camp">Camp</label>
          <input type="text" required id="camp" ref={campInputRef} />
        </div>

        <div className={classes.control}>
          <label html_for="shipment_status">shipment status</label>
          <input
            type="text"
            required
            id="shipment_status"
            ref={shipment_statusInputRef}
          />
        </div>

        <div className={classes.control}>
          <label html_for="subject">Message Subject</label>
          <input type="text" required id="subject" ref={subjectInputRef} />
        </div>

        <div className={classes.control}>
          <label html_for="image">Message Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>

        <div className={classes.control}>
          <label html_for="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>

        <div className={classes.control}>
          <label html_for="message_text">Message</label>
          <textarea
            id="message_text"
            required
            rows="5"
            ref={message_textInputRef}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Submit Message</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMessageForm;
