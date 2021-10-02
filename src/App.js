import { Message } from "./components/message";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { MessageInput } from "./components/message_input";

function App() {
  const [MessageList, setMessageList] = useState([]);

  useEffect(() => {
    if (MessageList.length > 0) {
      const last_message = MessageList[MessageList.length - 1];
      if (last_message.author === "Human") {
        Robot(last_message.text);
      }
    }
  }, [MessageList]);

  function Robot(text) {
    setTimeout(
      SendMessage,
      1500,
      "'" + text + "' - Got it, bro!",
      "Robot",
      "darkred"
    );
  }

  function SendMessage(text, author, color) {
    const date = new Date().getTime();
    let message_list = [...MessageList];
    message_list.push({
      text: text,
      author: author,
      date: date,
      id: author + date,
      color: color,
    });
    setMessageList(message_list);
  }

  return (
    <div className={styles.App}>
      <div className={styles.Messages}>
        {MessageList.map((message) => (
          <Message
            text={message.text}
            author={message.author}
            color={message.color}
            date={message.date}
            key={message.id}
          />
        ))}
      </div>
      <div className={styles.Input}>
        <MessageInput onSend={SendMessage} />
      </div>
    </div>
  );
}

export default App;
