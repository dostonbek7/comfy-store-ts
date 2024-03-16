import { useState } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
function Toggle() {
  const [theme, setTheme] = useState(false);
  const handleTheme = () => {
    setTheme(!theme);
  };
  return (
    <>
      <label className="swap swap-rotate ">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" onChange={handleTheme} />

        {/* sun icon */}
        <BsSunFill className="swap-on h-4 w-4" />

        {/* moon icon */}
        <BsMoonFill className="swap-off h-4 w-4" />
      </label>
    </>
  );
}
export default Toggle;
