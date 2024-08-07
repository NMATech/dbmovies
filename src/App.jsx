import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="font-sans">
      <Nav />
      <Hero />
    </main>
  );
}

export default App;
