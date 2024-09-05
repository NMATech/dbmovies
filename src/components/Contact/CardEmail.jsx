const CardEmail = () => {
  return (
    <section className="w-1/2 flex flex-col gap-6 bg-gradient-to-br from-netflix-red to-netflix-red/50 rounded-xl p-6">
      <section>
        <h1 className="text-3xl font-semibold mb-2">Get In Touch !</h1>
        <p>
          Lorem ipsum dolor sit amet nemo! Voluptates libero veritatis iste fuga
          ab perferendis sed.
        </p>
      </section>

      <section className="w-full flex flex-col gap-3">
        <input
          type="email"
          placeholder="email"
          className="w-full bg-transparent border border-netflix-white/60 placeholder:text-white/60 rounded-full"
        />
        <input
          type="text"
          placeholder="subject"
          className="w-full bg-transparent border border-netflix-white/60 placeholder:text-white/60 rounded-full"
        />
        <textarea
          placeholder="message"
          className="w-full bg-transparent border border-netflix-white/60 placeholder:text-white/60 rounded-2xl"
          rows="4"
          cols="40"
        />
      </section>

      <button className="w-max px-6 py-2 bg-netflix-black rounded-full">
        Submit
      </button>
    </section>
  );
};

export default CardEmail;
