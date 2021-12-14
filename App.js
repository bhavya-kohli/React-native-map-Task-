import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import { theme } from './AppStyle';
import { HomeScreen } from './app/screens/Home';
import {
  StyleSheet,
} from 'react-native';


const App=()=>{
return (
  <PaperProvider theme={theme} >
  <HomeScreen />
  </PaperProvider>
);

}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
