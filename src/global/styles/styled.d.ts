import 'styled-components';
import theme from './theme'

declare module 'styled_components' {
  type ThemeType = typeof theme

  export interface DefaultTheme extends ThemeType { }
}