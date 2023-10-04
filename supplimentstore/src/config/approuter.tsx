import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "../pages/admin";
import Student from "../pages/student";
import Login from "../pages/login";
import Home from "../pages/home";
import SignUp from "../pages/signup";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<Admin />} />
        <Route path="student" element={<Student />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}
