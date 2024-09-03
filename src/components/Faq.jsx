import CardFaq from "./shared/CardFaq";
import { motion } from "framer-motion";
import { useState } from "react";

function Faq() {
  const faqs = [
    {
      question: "What is DbMovies ?",
      answer:
        "DbMovies is an online database containing information and statistics about movies, TV shows, and directors and other film industry professionals.",
    },
    {
      question: "How much does DbMovies cost ?",
      answer:
        "See all of the movies data on your smartphone, tablet, Smart TV, laptop, all for one fixed monthly fee. Plans range from IDR 54,000 to IDR 186,000 a month. Haha Kidding it's totally free numbnuts.",
    },
    {
      question:
        "Does it include database movies or TV shows from any country in the world ?",
      answer:
        "Of course not. This database doesn't include all of movies or TV shows in the world, because this website is using free api's.",
    },
    {
      question: "What api does this website use ?",
      answer:
        "This website is using omdb api for movies information and etc. You can see the docs here : omdbapi.com",
    },
  ];

  const [isOpen, setIsOpen] = useState(null);

  const handleOpen = (x) => {
    setIsOpen(isOpen === x ? null : x);
  };

  return (
    <section className="bg-netflix-black text-netflix-white p-5">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col gap-4 w-full md:w-[70%] mx-auto text-netflix-white text-center mb-5 "
      >
        <h1 className="font-bold text-xl md:text-2xl">
          Frequently Asked Question
        </h1>
      </motion.div>
      <div className="flex flex-col gap-2">
        {faqs.map((faq, index) => {
          return (
            <CardFaq
              data={faq}
              key={index}
              index={index}
              isOpen={isOpen === index}
              handleOpen={handleOpen}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Faq;
