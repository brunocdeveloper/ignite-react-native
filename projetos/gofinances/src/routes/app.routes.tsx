import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import Dashboard from "../screens/Dashboard";
import { Register } from "../screens/Register";

export function AppRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Listagem" component={Dashboard} />
      <Tab.Screen name="Register" component={Register} />
      <Tab.Screen name="Lista" component={Register} />
    </Tab.Navigator>
  );
}
