import HeroAbout from "../components/About/HeroAbout";
import HeroFoot from "../components/About/HeroFoot";
import SectionInfo from "../components/About/SectionInfo";
import SectionInfo2 from "../components/About/SectionInfo2";

const About = () => {
  return (
    <div className="bg-netflix-black text-netflix-white pt-[6vh] md:pt-[9vh] pb-5">
      <HeroAbout />
      <SectionInfo />
      <SectionInfo2 />
      <HeroFoot />
    </div>
  );
};

export default About;
