import {Message} from "./components/message";
import styles from "./App.module.css"

function App() {
  return (
      <div className={styles.App}>
        <Message>Hello World!</Message>
      </div>
  );
}

export default App;