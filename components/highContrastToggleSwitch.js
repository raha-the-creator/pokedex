import Image from "next/image";
import { useTheme } from "../utilities/provider";

const HighContrastToggleSwitch = ({
  isContrastChecked,
  handleContrastToggle,
  onClick,
}) => {
  const {contrastTheme, setContrastTheme} = useTheme();
  const inlineStyle = {};
  console.log(isContrastChecked);
  return (
    <div className={`switch-cont-${contrastTheme}`} >
      <input
        onClick={() => setContrastTheme(contrastTheme === "contrast" ? "normal" : "contrast")}
        checked={isContrastChecked}
        onChange={handleContrastToggle}
        type="checkbox"
        className="switch-checkbox"
        id="contrast-switch-toggle"
      />
      <label className="switch-label" htmlFor="contrast-switch-toggle">
        <span className="switch-button">
          {isContrastChecked == true ? (
            <Image
              src={"/icon/highContrastTextIconDarkMode.svg"}
              width={20}
              height={20}
              alt="icon"
            />
          ) : (
            <Image
              src={"/icon/highContrastTextIconLightMode.svg"}
              width={20}
              height={20}
              alt="icon"
            />
          )}
        </span>
      </label>
    </div>
  );
};

export default HighContrastToggleSwitch;
