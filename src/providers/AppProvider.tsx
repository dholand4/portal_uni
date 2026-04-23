import { ReactNode } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import { theme } from '../themes/theme';

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SafeAreaProvider>
  );
}
