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
  CarDetails: { car: CarDTO };
  Home: undefined;
  Scheduling: { car: CarDTO };
  SchedulingDetails: { car: CarDTO; dates: any };
  Confirmation: {
    nextScreenRoute: string;
    title: string;
    message: string;
  };
  MyCars: undefined;
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
};

export type CarDetailsProps = NativeStackNavigationProp<
  RootStackParamList,
  "CarDetails" | "MyCars"
>;

export type SchedulingDetailsProps = NativeStackNavigationProp<
  RootStackParamList,
  "SchedulingDetails"
>;

export type SchedulingProps = NativeStackNavigationProp<
  RootStackParamList,
  "Scheduling"
>;

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AppStackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="Confirmation" component={Confirmation} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
}
