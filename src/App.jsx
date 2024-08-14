import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import OurService from "./components/OurService";
import Video from "./components/Video";
import Comments from "./components/Comments";

function App() {
  return (
    <main className="font-sans">
      <Nav />
      <Hero />
      <OurService />
      <Video />
      <Comments />
    </main>
  );
}

export default App;
