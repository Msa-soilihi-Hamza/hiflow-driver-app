import React from 'react';
import * as Sentry from '@sentry/react-native';
import { AppNavigator } from './src/navigation/AppNavigator';

Sentry.init({
  dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
  debug: false,
});

function App() {
  return <AppNavigator />;
}

export default Sentry.wrap(App);
