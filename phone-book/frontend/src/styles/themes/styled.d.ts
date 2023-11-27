import { theme } from "./theme";

declare module "styled-components" {
  type CustomTheme = typeof theme;

  export type DefaultTheme = CustomTheme;
}
