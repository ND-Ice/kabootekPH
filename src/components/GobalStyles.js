import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

body {
background:${({ theme }) => theme.light_color};
}
`;
