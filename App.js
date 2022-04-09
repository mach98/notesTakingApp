import React from "react";

import {View, Text} from "react-native";

import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NotesList from "./Screens/NotesList/NotesList";
import EditNote from "./Screens/EditNote/EditNote";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: 'false'}}
        initialRouteName={'NotesList'}>
        <Stack.Screen name="Notes List" component={NotesList} />
        <Stack.Screen name="Create Note" component={CreateNote}/>
        <Stack.Screen name="Edit Note" component={EditNote}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;