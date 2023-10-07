import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { fbSignUp } from "../config/firebase/firebasemethods";

export default function SignUp() {
  const [model, setModel] = useState<any>({});

  const fillModel = (key: string, val: any) => {
    model[key] = val;
    setModel({ ...model });
  };

  const navigate = useNavigate();
  const userSignUp = () => {
    model.role = "user";
    fbSignUp(model)
      .then((res) => {
        if (model.role == "admin") {
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
        <h1>Sign Up</h1>

        <div className="py-1">
          <input
            value={model.userName}
            onChange={(e) => fillModel("userName", e.target.value)}
            className="form-control"
            placeholder="User Name"
            type="userName"
          />
        </div>
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
            onClick={userSignUp}
            className="btn w-100 btn-block btn-primary"
          >
            Sign Up
          </button>
        </div>
        <div className="py-1">
          <Link to="/login">Already Registered?</Link>
        </div>
      </div>
    </>
  );
}
