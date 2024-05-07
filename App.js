const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import OTPVerfication from "./components/OTPVerfication";
import CreateNewPassword from "./components/CreateNewPassword";
import SideBar from "./components/SideBar";
import About from "./components/About";
import Profile from "./components/Profile";
import FAQ from "./components/FAQ";
import Symptoms from "./components/Symptoms";
import NASALDISCHARGE from "./components/NASALDISCHARGE";
import SWOLLENCOMB from "./components/SWOLLENCOMB";
import SWOLLENFEET from "./components/SWOLLENFEET";
import SWOLLENEYES from "./components/SWOLLENEYES";
import SNEEZING from "./components/SNEEZING";
import DIARRHEA from "./components/DIARRHEA";
import ATAXIA from "./components/ATAXIA";
import Login from "./components/Login";
import Start from "./components/Start";
import ActiveNo from "./components/ActiveNo";
import NASALDISCHARGE1 from "./components/NASALDISCHARGE1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Rubik-Regular": require("./assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Medium": require("./assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Bold": require("./assets/fonts/Rubik-Bold.ttf"),
    "Rubik-LightItalic": require("./assets/fonts/Rubik-LightItalic.ttf"),
    "Rubik-BoldItalic": require("./assets/fonts/Rubik-BoldItalic.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
    "Rowdies-Regular": require("./assets/fonts/Rowdies-Regular.ttf"),
    "Rowdies-Bold": require("./assets/fonts/Rowdies-Bold.ttf"),
    "Knewave-Regular": require("./assets/fonts/Knewave-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="About"
              component={About}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FAQ"
              component={FAQ}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Symptoms"
              component={Symptoms}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NASALDISCHARGE"
              component={NASALDISCHARGE}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SWOLLENCOMB"
              component={SWOLLENCOMB}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SWOLLENFEET"
              component={SWOLLENFEET}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SWOLLENEYES"
              component={SWOLLENEYES}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SNEEZING"
              component={SNEEZING}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DIARRHEA"
              component={DIARRHEA}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ATAXIA"
              component={ATAXIA}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
