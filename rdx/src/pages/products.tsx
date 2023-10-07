import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../config/redux/reducers/cartslice";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const [listData, setListData] = useState<any>([]);

  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.cart);

  const getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setListData([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addToCart = (x: any) => {
    dispatch(add(x));
  };

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="header">
        <h1>Products</h1>
        <button
          onClick={() => {
            navigate("/cart");
          }}
        >
          Cart Item {data.length}
        </button>
      </div>
      {listData.map((x: any, i: any) => (
        <div className="productCard" key={i}>
          <img width={200} src={x.image} alt={x.title} />
          <h3>{x.title}</h3>
          <p>{x.price}</p>
          <p>{x.category}</p>
          <button onClick={() => addToCart(x)}>Add To Cart</button>
        </div>
      ))}
    </>
  );
}
