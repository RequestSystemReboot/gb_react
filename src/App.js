import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { MessageInput } from "./components/MessageInput";
import faker from "faker";
import {
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
} from "@material-ui/core";
import { Layout } from "./components/Layout";
import { ChatList } from "./components/ChatList";
import { Messages } from "./components/Messages";

const createChat = () => ({
  id: faker.datatype.uuid(),
  name: faker.animal.dog(),
});

function App() {
  const [MessageList, setMessageList] = useState([]);
  const [ChatItems] = useState(Array.from({ length: 25 }).map(createChat));
  const [DarkTheme, setDarkTheme] = useState(false);

  function SendMessage(text, author, color) {
    const date = new Date().getTime();
    let message_list = [...MessageList];
    message_list.push({
      text: text,
      author: author,
      date: date,
      id: author + date, // no key error
      color: color,
    });
    setMessageList(message_list);
  }

  function Robot(text) {
    setTimeout(
      SendMessage,
      1500,
      "'" + text + "' - Got it, bro!",
      "Robot",
      "darkred"
    );
  }

  useEffect(() => {
    if (MessageList.length > 0) {
      const last_message = MessageList[MessageList.length - 1];
      if (last_message.author === "Human") {
        Robot(last_message.text);
      }
    }
  }, [MessageList]);

  return (
    <Layout darktheme={DarkTheme}>
      <Container fixed>
        <Grid container spacing={1} className={styles.App}>
          <Grid item xs={3} className={styles.ChatList}>
            <ChatList ChatItems={ChatItems} />
          </Grid>
          <Grid item xs={9} className={styles.Messages}>
            <Messages messages={MessageList} />
          </Grid>
          <Grid item xs={10} className={styles.Input}>
            <MessageInput onSend={SendMessage} />
          </Grid>
          <Grid item xs={2}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    defaultChecked
                    onChange={() => {
                      setDarkTheme(!DarkTheme);
                    }}
                  />
                }
                label="Theme"
              />
            </FormGroup>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default App;
