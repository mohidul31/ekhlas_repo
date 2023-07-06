import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Project1 from "./src/Project1";
import Project2 from "./src/Project2";
import Project2Details from "./src/Project2Details";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Project2"
          component={Project2}
          options={{ title: "Products" }}
        />
        <Stack.Screen
          name="Project2Details"
          component={Project2Details}
          options={{ title: "Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
