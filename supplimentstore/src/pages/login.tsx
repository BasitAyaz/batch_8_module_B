import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fbAuth, fbLogin } from "../config/firebase/firebasemethods";

export default function Login() {
  const [model, setModel] = useState<any>({});

  const fillModel = (key: string, val: any) => {
    model[key] = val;
    setModel({ ...model });
  };
  const navigate = useNavigate();

  useEffect(() => {
    fbAuth()
      .then((res) => {
        // window.history.back();
        navigate("/student");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const loginUser = (e: any) => {
    e.preventDefault();
    fbLogin(model)
      .then((res: any) => {
        console.log(res);
        if (res.role == "admin") {
          navigate("/admin");
        } else {
          navigate("/student");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="h-screen d-flex justify-content-center align-items-center flex-column">
        <h1>Login</h1>
        <form onSubmit={(e) => loginUser(e)}>
          <div className="py-1">
            <input
              value={model.email}
              onChange={(e) => fillModel("email", e.target.value)}
              className="form-control"
              placeholder="Email"
              type="email"
            />
          </div>
          <div className="py-1">
            <input
              value={model.password}
              onChange={(e) => fillModel("password", e.target.value)}
              className="form-control"
              placeholder="Password"
              type="password"
            />
          </div>
          <div className="py-1">
            <button
              onClick={loginUser}
              className="btn w-100 btn-block btn-primary"
            >
              Login
            </button>
          </div>
          <div className="py-1">
            <Link to="/signup">Create Account?</Link>
          </div>
        </form>
      </div>
    </>
  );
}
