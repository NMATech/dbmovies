import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import OurService from "./components/OurService";
import Video from "./components/Video";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="font-sans">
      <Nav />
      <Hero />
      <OurService />
      <Video />
    </main>
  );
}

export default App;
