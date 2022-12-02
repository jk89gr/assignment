import * as React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Text>Inop</Text>
      </SafeAreaView>
    </NavigationContainer>
  );
}