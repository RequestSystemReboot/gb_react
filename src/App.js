import { useEffect, useState } from "react";
import faker from "faker";
import { Layout } from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes/Routes";
import {chatsRef, messagesRef} from "./firebase";

export const createChat = () => {
  const id = faker.datatype.uuid();
  chatsRef.child(id).set(faker.vehicle.manufacturer());
};

export const popChat = (id) => {
  chatsRef.child(id).remove();
};

function App() {
  const [DarkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    chatsRef.remove();
    messagesRef.remove();
    for (let i = 0; i < 5; i++) {
      createChat();
    }
  }, []);

  return (
    <BrowserRouter>
      <Layout darktheme={DarkTheme}>
        <Routes setDarkTheme={setDarkTheme} DarkTheme={DarkTheme} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
