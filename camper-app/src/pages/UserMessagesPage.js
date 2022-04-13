import { useState, useEffect } from "react";
import MessageList from "../components/messages/MessageList";

function UserMessagesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMessages, setLoadedMessages] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://camper-a740c-default-rtdb.firebaseio.com/messages.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const messages = [];

        for (const key in data) {
          const message = {
            id: key,
            ...data[key]
          };
          messages.push(message);
        }

        setIsLoading(false);
        setLoadedMessages(messages);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Messages</h1>
      <MessageList messages={loadedMessages} />
    </section>
  );
}

export default UserMessagesPage;
