import { useDarkMode } from "../context/DarkModeContext";

function Logo({ width, height }) {
  const { isDarkMode } = useDarkMode();
  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";
  return (
    <div className={`m-auto p-5`} style={{ width, height }}>
      <img src={src} alt="The wild oasis" />
    </div>
  );
}

export default Logo;
