import Card from "../ui/Card";
import classes from "./MessageItem.module.css";

function MessageItem(props) {
  return (
    <li>
      <Card>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <div>
          <img className={classes.list} src={props.image} alt={props.subject} />
        </div>
        <div>
          <h3 className={classes.subject}>Subject: {props.subject}</h3>
          <br />
          <span>
            <strong>Submitted on:</strong> {props.date}{" "}
          </span>
          <br />
          <span>
            <strong>At:</strong> {props.time_submitted}
          </span>
          <br />
          <span>
            <strong>From:</strong> {props.from}
          </span>
          <br />
          <address>
            <strong>Address:</strong> {props.address}
          </address>
          <br />
          <span>
            <strong>Regarding:</strong> {props.camper_name}
          </span>
          <br />
          <span>
            <strong>Camp:</strong> {props.camp}
          </span>
          <br />
          <span class={classes.delivery_status}>
            <strong>Delivery:</strong> {props.shipment_status}
          </span>
          <br />

        </div>
        <br />
        <div className={classes.message_text}>
          <p>
            <strong>Message:</strong>
            <br />
            {props.message_text}
          </p>
          <button className="btn">Do It</button>
        </div>
        <br />
        <br />
        <hr />
        <br />
        <br />
      </Card>
    </li>
  );
}

export default MessageItem;
