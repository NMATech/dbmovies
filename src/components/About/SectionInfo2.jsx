const SectionInfo2 = () => {
  const dataService = [
    {
      title: "Movies Data",
      percent: 90,
    },
    {
      title: "Series Data",
      percent: 80,
    },
    {
      title: "TV Show Data",
      percent: 65,
    },
  ];
  const dataTesti = [
    {
      numbers: "100.000+",
      title: "User's",
    },
    {
      numbers: "9.000",
      title: "Membership",
    },
    {
      numbers: "10+",
      title: "Years of Experience",
    },
    {
      numbers: "69",
      title: "Certificate Award",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row gap-5 bg-netflix-black text-netflix-white px-[8vw] mt-[1em] md:mt-[3em]">
      <section className="flex flex-col gap-3 w-full md:w-1/2">
        <h1 className="text-3xl font-semibold">Our's Service</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolore
          voluptates dicta possimus.
        </p>
        <section className="flex flex-col gap-2">
          {dataService.map((data, index) => {
            return (
              <>
                <section key={index} className="w-full flex justify-between">
                  <h1>{data.title}</h1>
                  <h1>{data.percent}%</h1>
                </section>
                <section className="relative">
                  <section className="w-full h-4 bg-netflix-darkgray rounded-full"></section>
                  <section
                    className="absolute inset-0 h-4 bg-netflix-red rounded-full"
                    style={{ width: `${data.percent}%` }}
                  ></section>
                </section>
              </>
            );
          })}
        </section>
      </section>
      <section className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2">
        {dataTesti.map((data, index) => {
          return (
            <section
              key={index}
              className="flex flex-col justify-center items-center text-center"
            >
              <h1 className="text-[2em] md:text-[2.5em] lg:text-[3em] font-semibold">
                {data.numbers}
              </h1>
              <h1 className="text-lg text-netflix-lightgray">{data.title}</h1>
            </section>
          );
        })}
      </section>
    </section>
  );
};

export default SectionInfo2;
