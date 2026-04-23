import { StatusBar } from 'expo-status-bar';

import { AppProvider } from './providers/AppProvider';
import { AppRoutes } from './routes';

export default function App() {
  return (
    <AppProvider>
      <StatusBar style="dark" backgroundColor="#ffffff" />
      <AppRoutes />
    </AppProvider>
  );
}
