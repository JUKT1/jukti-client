import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import './App.css';
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NoPage from "./NoPage";
import CreateProfile from "./pages/student/CreateProfile";
import StudentLayout from "./pages/student/StudentLayout";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="createProfile" element={<CreateProfile />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
