import Image from "next/image";
import { useTheme } from "../utilities/provider";

const BoldTextToggleSwitch = ({ isBoldChecked, handleBoldToggle }) => {
  console.log(isBoldChecked);
  const { boldTheme, setBoldTheme } = useTheme();
  return (
    <div className={`switch-cont-${boldTheme}`}>
      <input
        onClick={() => setBoldTheme(boldTheme === "bold" ? "regular" : "bold")}
        checked={isBoldChecked}
        onChange={handleBoldToggle}
        type="checkbox"
        className="switch-checkbox"
        id="bold-switch-toggle"
      />
      <label className="switch-label" htmlFor="bold-switch-toggle">
        <span className="switch-button">
          {isBoldChecked == true ? (
            <Image
              src={"/icon/BoldedTextIconDarkMode.svg"}
              width={20}
              height={20}
              alt="icon"
            />
          ) : (
            <Image
              src={"/icon/BoldedTextIconLightMode.svg"}
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

export default BoldTextToggleSwitch;
