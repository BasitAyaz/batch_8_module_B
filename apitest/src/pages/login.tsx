import axios from "axios";

export default function Login() {
  const loginUser = () => {
    axios
      .post("http://localhost:5000/auth/login", {
        userName: "ABC",
        password: "123456",
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("authToken", res.data?.data?.token);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <button onClick={loginUser}>Login</button>
    </>
  );
}
