import { useEffect, useState } from "react";
import faker from "faker";
import { Layout } from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes/Routes";
import { useDispatch } from "react-redux";
import { chatsAddList } from "./store/chats/actionTypes";

export const createChat = () => ({
  id: faker.datatype.uuid(),
  name: faker.vehicle.manufacturer(),
});

function App() {
  const [DarkTheme, setDarkTheme] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(chatsAddList(Array.from({ length: 7 }).map(createChat)));
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
