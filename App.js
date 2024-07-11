import { NavigationContainer } from '@react-navigation/native';
import Screens from './Screens';
import { Platform, SafeAreaView, StatusBar } from 'react-native';
import { Fragment } from 'react';
export default function App() {
  return (
    <Fragment>
      <SafeAreaView style={{
      flex: 1,
      backgroundColor: "white",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight - 5 : 0
    }}>
      <NavigationContainer>
          <Screens/>
      </NavigationContainer>
    </SafeAreaView>
    </Fragment>
  );
}
