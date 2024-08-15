import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import OurService from "./components/OurService";
import Video from "./components/Video";
import Comments from "./components/Comments";
import Faq from "./components/Faq";

function App() {
  return (
    <main className="font-sans">
      <Nav />
      <Hero />
      <OurService />
      <Video />
      <Comments />
      <Faq />
    </main>
  );
}

export default App;
