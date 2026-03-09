import React from 'react';
import * as Sentry from '@sentry/react-native';
import { AppNavigator } from './src/navigation/AppNavigator';

Sentry.init({
  dsn: 'https://28e74a23a06f000a58dbd5f0387267b8@o4511015299055616.ingest.de.sentry.io/4511015300956240',
  debug: false, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

function App() {
  return <AppNavigator />;
}

export default Sentry.wrap(App);
