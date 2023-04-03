import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { Container } from "./components/index";
import { Header, Footer } from "./sections/index";
import { Home, Browse, Detailes, Streams, Profile } from "./Pages/index";
import useLocalStorage from "use-local-storage";
import { FaToggleOn } from "react-icons/fa";

const App = () => {
  // Toggle Mode
  const [theme, setTheme] = useLocalStorage("theme" ? "light" : "dark");
  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <div className="app" data-theme={theme}>
      <Router basename={"/first-react-app"}>
        <Header />
        <div className="theme-toggle">
          <h4>Switch Mode</h4>
          <span className="toggle-icon">
            <FaToggleOn onClick={switchTheme} />
          </span>
        </div>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/detailes" element={<Detailes />} />
            <Route path="/streams" element={<Streams />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
