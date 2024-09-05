const CardMaps = () => {
  return (
    <section className="w-1/2 flex flex-col gap-6 bg-netlflix-black rounded-xl p-6">
      <section>
        <h1 className="text-3xl font-semibold mb-2">Our Location !</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ut
          atque itaque mollitia quaerat fuga ex odit, blanditiis aspernatur
          assumenda.
        </p>
      </section>
      <div class="flex justify-center items-center">
        <div class="relative text-right w-full max-w-[820px] h-[280px]">
          <iframe
            width="100%"
            height="100%"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=jalan+singaperbangsa+dusun+kertasari+desa+mekarmaya+kecamatan+cilamaya+wetan+sebelah+our+steam&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            class="overflow-hidden bg-none"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default CardMaps;
