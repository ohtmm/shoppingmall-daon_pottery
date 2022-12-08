import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      vanilla: string;
      brown: string;
      black: string;
      green: string;
      white: string;
      darkGray: string;
      darkPink: string;
      textPrimary: string;
      darkBlack: string;
    };
  }
}
