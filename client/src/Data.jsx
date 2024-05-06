import { useEffect, useState } from "react";
import axios from "axios";

const Data = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://mobile-api-z3cm.onrender.com/mobiles/samsung/")
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      Data
      {data.map((element) => (
        <li key={element.id}>
          {element.brand} - {element.price}
        </li>
      ))}
    </div>
  );
};

export default Data;
