import Nav from "./components/Nav";
import Hero from "./components/Hero";
import OurService from "./components/OurService";
import Video from "./components/Video";
import Comments from "./components/Comments";
import Faq from "./components/Faq";
import Foot from "./components/Foot";

function App() {
  return (
    <>
      <main className="font-sans">
        <Nav />
        <Hero />
        <OurService />
        <Video />
        <Comments />
        <Faq />
      </main>
      <Foot />
    </>
  );
}
import Footer from "./components/Foot";

export default App;
