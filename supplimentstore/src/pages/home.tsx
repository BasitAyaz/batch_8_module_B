import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-screen bg-light d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-center">Welcome To Quiz App</h1>
        <button
          onClick={() => navigate("/login")}
          className="btn btn-primary m-1"
        >
          Login as a Student
        </button>
        <button
          onClick={() => navigate("/login")}
          className="btn btn-primary m-1"
        >
          Login as a Teacher
        </button>
      </div>
    </>
  );
}
