import { useState } from "react";
import faker from "faker";

import { Layout } from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes/Routes";

const createChat = () => ({
  id: faker.datatype.uuid(),
  name: faker.vehicle.manufacturer(),
});

function App() {
  const [ChatItems, setChatItems] = useState(Array.from({ length: 7 }).map(createChat));
  const [DarkTheme, setDarkTheme] = useState(false);

  function AddChat() {
    let chats = [...ChatItems]
    chats.push(createChat())
    setChatItems(chats)
  }

  function DeleteChat() {
    let chats = [...ChatItems]
    chats.pop()
    setChatItems(chats)
  }

  return (
    <BrowserRouter>
      <Layout darktheme={DarkTheme}>
        <Routes
          ChatItems={ChatItems}
          setDarkTheme={setDarkTheme}
          DarkTheme={DarkTheme}
          AddChat={AddChat}
          DeleteChat={DeleteChat}
        />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
