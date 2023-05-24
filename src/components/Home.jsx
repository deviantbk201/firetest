import axios from "../axios";
import { useEffect, useState } from "react";
import BasicTable from "./Molucules/Table";
export default function Home() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  // useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((res) => setMyData(res.data))
  //     .catch((error) => setIsError(error.message));
  // }, []);

  const getAllProducts = async function () {
    try {
      const res = await axios.get(`/products`);
      setMyData(res.data);
      console.log(myData);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      {isError != "" && <h2>{isError}</h2>}
      {/* {myData.map((post) => {
        const { id, title, price, description, category, image } = post;
        return (
          <div className="card" key={id}>
            <h2>{title}</h2>
            <h4>{price}</h4>
            <h3>{category}</h3>
            <p> {description}</p>
            <img src={image} />
          </div>
        );
      })} */}
      <BasicTable data={myData} />
    </>
  );
}
