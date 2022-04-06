import Image from "next/image";
import { useTheme } from "../utilities/provider";

const ThemeToggleSwitch = ({
  isThemeChecked,
  handleThemeToggle,
  onClick,
  bg = null,
}) => {
  const { theme, setTheme } = useTheme();
  const inlineStyle = {};
  if (bg) {
    inlineStyle.backgroundColor = bg;
  }
  return (
    <div className={`switch-cont-${theme}`} style={inlineStyle}>
      <input
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        checked={isThemeChecked}
        onChange={handleThemeToggle}
        type="checkbox"
        className="switch-checkbox"
        id="theme-switch-toggle"
      />
      <label className="switch-label" htmlFor="theme-switch-toggle">
        <span className="switch-button">
          {isThemeChecked == true ? (
            <Image
              src={"/icon/themeToggleDarkMode.svg"}
              width={35}
              height={40}
              alt="icon"
            />
          ) : isThemeChecked == false ? (
            <Image
              src={"/icon/themeToggleLightMode.svg"}
              width={40}
              height={40}
              alt="icon"
            />
          ) : null}
        </span>
      </label>
    </div>
  );
};

export default ThemeToggleSwitch;
