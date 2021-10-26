import React, { useState } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        {/* NAV */}
        <label class="switch">
          <input type="checkbox" onClick={() => themeToggler()} />
          <span class="slider round"></span>
        </label>
        {/* HEADER */}
        Hello World
        {/* FOOTER */}
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
