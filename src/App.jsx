import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import OurService from "./components/OurService";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="font-sans">
      <Nav />
      <Hero />
      <OurService />
    </main>
  );
}

export default App;
