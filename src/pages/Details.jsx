import { useParams } from "react-router-dom";
import Detail from "../components/Details/Detail";
import Hero from "../components/Hero";
import { useEffect, useState } from "react";
import { getDetails } from "../service/service";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    getDetails(id, setData);
  }, [id]);

  console.log(data);

  return (
    <div className="bg-netflix-black text-netflix-white min-h-max py-2 px-2">
      {/* <Hero /> */}
      <Detail data={data} />
    </div>
  );
};

export default Details;
