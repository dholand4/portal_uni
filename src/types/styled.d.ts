import 'styled-components/native';

import { AppTheme } from '../themes/theme';

declare module 'styled-components/native' {
  export interface DefaultTheme extends AppTheme {}
}
