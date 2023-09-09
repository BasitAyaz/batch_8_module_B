import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "../pages/projects";
import AddProject from "../pages/addproject";
export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="add/" element={<AddProject />} />
          <Route path="add/:id" element={<AddProject />} />
        </Routes>
      </Router>
    </>
  );
}
