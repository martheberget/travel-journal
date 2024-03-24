import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import data from "./data/travels.js";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const cards = data.map((card) => {
    return <Card key={card.id} card={card} />;
  });

  return (
    <>
      <Navbar />
      <section>{cards}</section>
    </>
  );
}

export default App;
