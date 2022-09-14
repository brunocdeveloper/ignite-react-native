import "react-native-gesture-handler";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import React from "react";
import Dashboard from "./src/screens/Dashboard";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/global/styles/theme";
import * as SplashScreen from "expo-splash-screen";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Register } from "./src/screens/Register";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/app.routes";

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fonstLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fonstLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
