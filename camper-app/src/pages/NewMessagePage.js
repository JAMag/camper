import { useNavigate } from "react-router-dom";
import NewMessageForm from "../components/messages/NewMessageForm";

function NewMessagePage() {
  const navigate = useNavigate();


  function addMessageHandler(messageData) {
    fetch(
      "https://camper-a740c-default-rtdb.firebaseio.com/messages.json", 
      {
      method: "POST",
      body: JSON.stringify(messageData),
      headers: {
        "Content-Type": "application/json",
      }
    }
    ).then(() => {
      navigate("/");
    });
  }

  return (
    <section>
      <h1>Add New Message</h1>
      <NewMessageForm onAddMessage={addMessageHandler} />
    </section>
  );
}

export default NewMessagePage;
