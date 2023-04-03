import "./SwitchMode.css";
import { FaToggleOn } from "react-icons/fa";
import useLocalStorage from "use-local-storage";

const SwitchMode = () => {
  const [theme, setTheme] = useLocalStorage("theme" ? "light" : "dark");
  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };
  return (
    <>
      <div className="theme-toggle">
        <h4>Switch Mode</h4>
        <span className="toggle-icon">
          <FaToggleOn onClick={switchTheme} />
        </span>
      </div>
    </>
  );
};
export default SwitchMode;
