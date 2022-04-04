import React from "react";

import {StyleSheet,View, Text} from "react-native";

import {NavigationContainer} from "@react-navigation/native";


const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Hello World</Text>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: "#D3D3D3",
      padding:20
    }
});

export default App;