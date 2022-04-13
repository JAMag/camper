import classes from "./MessageList.module.css";
import MessageItem from "./MessageItem";

function MessageList(props) {
  return (
    <ul className={classes.list}>
      {props.messages.map((message) => (
        <MessageItem
          key={message.id}
          id={message.id}
          image={message.image}
          subject={message.subject}
          date={message.date}
          time_submitted={message.time_submitted}
          from={message.from}
          camper_name={message.camper_name}
          camp={message.camp}
          shipment_status={message.shipment_status}
          address={message.address}
          address_change={message.adress_change}
          message_text={message.message_text}
        />
      ))}
    </ul>
  );
}

export default MessageList;
