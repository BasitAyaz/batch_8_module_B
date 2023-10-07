import { useSelector } from "react-redux";

export default function Cart() {
  const data = useSelector((state: any) => state.cart);

  return (
    <>
      <h1>Cart</h1>
      <table>
        {data.map((x: any, i: any) => (
          <tr>
            <td>
              <img width={100} src={x.image} alt="" />
            </td>
            <td>{x.title}</td>
            <td>{x.price}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
