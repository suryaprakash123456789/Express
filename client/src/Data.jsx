// import { useEffect, useState } from "react";
// import axios from "axios";
// // import { deleteData } from "../../controllers/mobileControllers";

// const Data = () => {
//   let [data, setData] = useState([]);
//   let [mobileData, setMobileData] = useState({
//     brand: "",
//     price: "",
//   });
//   useEffect(() => {
//     fetchData();
//   }, [data]);

//   function fetchData() {
//     axios
//       .get("https://mobile-api-z3cm.onrender.com/mobiles/samsung/")
//       .then((res) => setData(res.data))
//       .catch((err) => console.log(err));
//   }

//   async function deleteData(id) {
//     await axios.delete(
//       `https://mobile-api-z3cm.onrender.com/mobiles/samsung/${id}`
//     );
//     fetchData();
//   }

//   async function sendData(e) {
//     e.preventDefault(e);
//     await axios.post(
//       "https://mobile-api-z3cm.onrender.com/mobiles/samsung/",
//       mobileData
//     );
//     setMobileData({ brand: "", price: "" });
//   }

//   function changing(e) {
//     setMobileData({
//       ...mobileData,
//       [e.target.name]: e.target.value,
//     });
//   }

//   function updateButton(item) {
//     setMobileData({
//       brand: item.brand,
//       price: item.price,
//       _id: item._id,
//     });
//   }
//   async function updateData(e) {
//     e.preventDefault(e);
//     await axios.put(
//       `https://mobile-api-z3cm.onrender.com/mobiles/samsung/${mobileData._id}`,
//       mobileData
//     );
//     fetchData();
//     setMobileData({ brand: "", price: "" });
//   }
//   return (
//     <div>
//       Data
//       {data.map((element) => (
//         <li key={element._id}>
//           {element.brand} - {element.price}-{element._id}{" "}
//           <button onClick={() => deleteData(element._id)}>Delete</button>{" "}
//           <button onClick={() => updateButton(element)}>Update</button>
//         </li>
//       ))}
//       <h1>Add Mobiles</h1>
//       <form>
//         <input
//           type="text"
//           value={mobileData.brand}
//           name="brand"
//           placeholder="enter the  modelname"
//           onChange={changing}
//         />
//         <input
//           type="text"
//           value={mobileData.price}
//           name="price"
//           placeholder="enter the price"
//           onChange={changing}
//         />
//         <button onClick={updateData}>update</button>
//         <button onClick={sendData}>Add</button>
//       </form>
//     </div>
//   );
// };

// export default Data;


import { useEffect, useState } from "react";
import axios from "axios";
// import { deleteData } from "../../controllers/mobileControllers";

const Data = () => {
  let [data, setData] = useState([]);
  let [mobileData, setMobileData] = useState({
    brand: "",
    price: "",
  });
  useEffect(() => {
    fetchData();
  }, [data]);

  function fetchData() {
    axios
      .get("https://rum-dijl.onrender.com/drinks/hotDrinks/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }

  async function deleteData(id) {
    await axios.delete(
      `https://mobile-api-z3cm.onrender.com/mobiles/samsung/${id}`
    );
    fetchData();
  }

  async function sendData(e) {
    e.preventDefault(e);
    await axios.post(
      "https://mobile-api-z3cm.onrender.com/mobiles/samsung/",
      mobileData
    );
    setMobileData({ brand: "", price: "" });
  }

  function changing(e) {
    setMobileData({
      ...mobileData,
      [e.target.name]: e.target.value,
    });
  }

  function updateButton(item) {
    setMobileData({
      brand: item.brand,
      price: item.price,
      _id: item._id,
    });
  }
  async function updateData(e) {
    e.preventDefault(e);
    await axios.put(
      `https://mobile-api-z3cm.onrender.com/mobiles/samsung/${mobileData._id}`,
      mobileData
    );
    fetchData();
    setMobileData({ brand: "", price: "" });
  }
  return (
    <div>
      Data
      {data.map((element) => (
        <li key={element._id}>
          {element.brand} - {element.price}-{element._id}{" "}
          <button onClick={() => deleteData(element._id)}>Delete</button>{" "}
          <button onClick={() => updateButton(element)}>Update</button>
        </li>
      ))}
      <h1>Add Mobiles</h1>
      <form>
        <input
          type="text"
          value={mobileData.brand}
          name="brand"
          placeholder="enter the  modelname"
          onChange={changing}
        />
        <input
          type="text"
          value={mobileData.price}
          name="price"
          placeholder="enter the price"
          onChange={changing}
        />
        <button onClick={updateData}>update</button>
        <button onClick={sendData}>Add</button>
      </form>
    </div>
  );
};

export default Data;
