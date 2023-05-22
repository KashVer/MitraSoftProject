import { Route, Routes } from "react-router";
import "./App.css";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import UserInfo from "./pages/UserInfo";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </>
  );
}

export default App;
