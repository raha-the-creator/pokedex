import Link from "next/link";
import { useEffect, useState } from "react";
import BoldTextToggleSwitch from "../components/boldTextToggleSwitch";
import HighContrastToggleSwitch from "../components/highContrastToggleSwitch";
import ThemeToggleSwitch from "../components/themeToggleSwitch";
import { useTheme } from "../utilities/provider";

export default function Settings() {
  const { setTheme } = useTheme();

  return (
    <div className="button-cont">
      <Link href={"/"}>
        <button>back to home</button>
      </Link>
    </div>
  );
}
