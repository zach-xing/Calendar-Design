import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./page/home";
import SettingScreen from "./page/setting";
import Toast from "react-native-toast-message";

const Stack = createNativeStackNavigator();

/**
 * 主路由
 */
export default function Main() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={() => ({
              header: () => null,
            })}
          />
          <Stack.Screen
            name="setting"
            component={SettingScreen}
            options={() => ({
              header: () => null,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>

      <Toast position="bottom" bottomOffset={70} />
    </>
  );
}
