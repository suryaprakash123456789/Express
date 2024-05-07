import { useEffect, useState } from "react";
import axios from "axios";
// import { deleteData } from "../../controllers/mobileControllers";

const Data = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetchData()
  },[data])

function fetchData() {
    axios
      .get("https://mobile-api-z3cm.onrender.com/mobiles/samsung/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
}

  async function deleteData(id){
    await axios.delete(`https://mobile-api-z3cm.onrender.com/mobiles/samsung/${id}`)
    fetchData()
  }
  return (
    <div>
      Data
      {data.map((element) => (
        <li key={element._id}>
          {element.brand} - {element.price}-{element._id} <button onClick={()=>deleteData(element._id)}>Delete</button>
        </li>
      ))}
    </div>
  );
};

export default Data;
