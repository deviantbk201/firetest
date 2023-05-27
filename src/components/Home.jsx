import axios from "../axios";
import { useEffect, useState } from "react";
import BasicTable from "./Molucules/Table";
import AddItemForm from "./Molucules/AddItemForm";
import UpdateItemForm from "./Molucules/UpdateItemForm";
import AddItemButton from "./Molucules/AddItemBtn";
import DeleteItemButton from "./Molucules/DeleteItemButton";
import UpdateItemButton from "./Molucules/UpdateItemButton";
import { ButtonGroup, Drawer, Stack } from "@mui/material";
export default function Home() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isUpdateDrawerOpen, setIsUpdateDrawerOpen] = useState(false);

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

  // handlers ========================
  const handlerOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handlerOpenUpdateDrawer = () => {
    setIsUpdateDrawerOpen(true);
  };
  const handlerAddItem = (res) => {
    setMyData([...myData, res.data]);
  };
  const handlerUpdateItem = (updatedProduct) => {
    const updatedArray = myData.filter((item) => item.id != updatedProduct.id);
    setMyData([updatedProduct, ...updatedArray].sort((a, b) => a.id - b.id));
    console.log(myData);
  };

  const handlerDeleteItem = () => {
    const productId = Number(prompt("enter productt id to delete"));
    // const res = await axios.get("/20", { method: "DELETE" });
    const updatedArray = myData.filter((item) => item.id != productId);
    setMyData(updatedArray);
  };
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
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <AddItemButton handler={handlerOpenDrawer} text="Add Item" />
        <UpdateItemButton
          handler={handlerOpenUpdateDrawer}
          text="update an Item"
        />

        <DeleteItemButton
          handler={() => {
            handlerDeleteItem();
          }}
          text="Delete Item"
        />
      </Stack>
      <BasicTable data={myData} />
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <AddItemForm onSubmitHandler={handlerAddItem} type="add" />
      </Drawer>
      <Drawer
        anchor="left"
        open={isUpdateDrawerOpen}
        onClose={() => setIsUpdateDrawerOpen(false)}
      >
        <UpdateItemForm onSubmitHandler={handlerUpdateItem} type="add" />
      </Drawer>
    </>
  );
}
