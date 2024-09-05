import CardEmail from "../components/Contact/CardEmail";
import CardMaps from "../components/Contact/CardMaps";
import ContactInfo from "../components/Contact/ContactInfo";
import HeroContact from "../components/Contact/HeroContact";

const Contact = () => {
  return (
    <section className="w-full h-max bg-netflix-black text-netflix-white pt-[7vh] md:pt-[8vh] pb-5 relative">
      <HeroContact />
      <ContactInfo />
      <section className="flex flex-col md:flex-row px-[8vw] mt-[3em]">
        <CardEmail />
        <CardMaps />
      </section>
    </section>
  );
};

export default Contact;
