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
import { CategorySelect } from "./src/screens/CategorySelect";

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
      <CategorySelect />
    </ThemeProvider>
  );
}
