import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Course from "../pages/course";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="course" element={<Course />} />
        </Routes>
      </Router>
    </>
  );
}
