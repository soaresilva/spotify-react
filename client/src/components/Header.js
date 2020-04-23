import React from "react";
import useDarkMode from "use-dark-mode";
import Toggle from "react-toggle";

function Header() {
  const darkMode = useDarkMode(false);

  return (
    <div className="Header">
      <div className="Title">
        <h4>Spotify API Playground App</h4>
      </div>
      <div className="dark-mode-toggler">
        <button type="button" onClick={darkMode.disable}>
          ☀
        </button>
        <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
        <button type="button" onClick={darkMode.enable}>
          ☾
        </button>
      </div>
    </div>
  );
}

export default Header;
