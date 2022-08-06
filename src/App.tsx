import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <h1>POST1</h1>
          <h1>POST2</h1>
          <h1>POST3</h1>
        </main>
      </div>
    </>
  );
}

export default App;
