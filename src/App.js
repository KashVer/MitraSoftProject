import { Route, Routes } from "react-router";
import { useLocation } from "react-router-dom";
import "./App.css";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import UserInfo from "./pages/UserInfo";
import { Container } from "react-bootstrap";
import NavigationBar from "./components/NavigationBar";

function App() {
  const location = useLocation();
  return (
    <Container>
      {!location.pathname.includes("/userinfo") && <NavigationBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userinfo/:userId" element={<UserInfo />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </Container>
  );
}

export default App;
