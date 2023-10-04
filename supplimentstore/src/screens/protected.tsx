import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fbAuth } from "../config/firebasemethods";

export default function Protected(props: any) {
  const { Screen } = props;
  const [loader, setLoader] = useState(true);

  const navigate = useNavigate();

  let checkAuth = () => {
    setLoader(true);

    fbAuth()
      .then((res) => {
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
        navigate("/login");
      });
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return loader ? (
    <>
      <h1>Loading...</h1>
    </>
  ) : (
    <Screen />
  );
}
