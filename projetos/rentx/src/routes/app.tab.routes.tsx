import React from "react";

import Home from "../screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  MyCars: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator<RootStackParamList>();

export function AppTabRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="Profile" component={Home} />
      <Screen name="MyCars" component={Home} />
    </Navigator>
  );
}
