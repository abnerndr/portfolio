import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#EFF3F5",
  fontColor: "#1E2426",
};

export const darkTheme = {
  body: "#1E2426",
  fontColor: "#EFF3F5",
};

export const GlobalStyles = createGlobalStyle`

	body {

		background-color: ${(props) => props.theme.body};

	}

`;
