import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import Home from "../screens/Home";
import CarDetails from "../screens/CarDetails";
import Scheduling from "../screens/Scheduling";
import SchedulingDetails from "../screens/SchedulingDetails";

import { CarDTO } from "../dtos/CarDTO";
import MyCars from "../screens/MyCars/Index";
import Splash from "../screens/Splash";
import SignIn from "../screens/SignIn";
import SignUpFirstStep from "../screens/SignUp/SignUpFirstStep";
import SignUpSecondStep from "../screens/SignUp/SignUpSecondStep";
import Confirmation from "../screens/Confirmation";

type RootStackParamList = {
  Splash: undefined;
  SignIn: undefined;
  SignUpFirstStep: undefined;
  SignUpSecondStep: {
    user: {
      name: string;
      email: string;
      driverLicense: string;
    };
  };
  Confirmation: {
    nextScreenRoute: string;
    title: string;
    message: string;
  };
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="SignIn">
      <Screen name="Splash" component={Splash} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUpFirstStep" component={SignUpFirstStep} />
      <Screen name="SignUpSecondStep" component={SignUpSecondStep} />
      <Screen name="Confirmation" component={Confirmation} />
    </Navigator>
  );
}
