import { useState } from "react";
import { Layout } from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes/Routes";

function App() {
  const [DarkTheme, setDarkTheme] = useState(false);

  return (
    <BrowserRouter>
      <Layout darktheme={DarkTheme}>
        <Routes setDarkTheme={setDarkTheme} DarkTheme={DarkTheme} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
