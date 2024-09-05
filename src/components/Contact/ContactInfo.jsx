import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const ContactInfo = () => {
  const iconSosmed = [
    {
      title: "@itsnadin_ra",
      logo: <FaInstagram className="text-[30px]" />,
      link: "https://instagram.com/@itsnadin_ra",
    },
    {
      title: "+6285880046909",
      logo: <FaWhatsapp className="text-[30px]" />,
      link: "wa.me/+6285880046909",
    },
    {
      title: "maulananadindra@gmail.com",
      logo: <MdOutlineEmail className="text-[30px]" />,
      link: "mailto:maulananadindra@gmail.com",
    },
  ];

  return (
    <section className="w-full flex flex-col gap-3 h-[13rem] px-[8vw] mt-[3em]">
      <h1 className="text-3xl font-semibold">Contact Information</h1>
      <p className="w-3/5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
        perspiciatis perferendis? Voluptatum sunt doloribus optio quibusdam est.
      </p>
      <section className="flex gap-10 mt-3">
        {iconSosmed.map((sosmed, index) => {
          return (
            <a
              href={sosmed.link}
              target="_blank"
              className="flex flex-col justify-center items-center"
            >
              <section
                key={index}
                className="bg-netflix-red w-max flex flex-col justify-center items-center px-4 py-1 rounded-full"
              >
                {sosmed.logo}
              </section>
              <h1 className="text-xl">{sosmed.title}</h1>
            </a>
          );
        })}
      </section>
    </section>
  );
};

export default ContactInfo;
