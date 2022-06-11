import React from "react";

import { NavigationContainer } from "@react-navigation/native";

// Navigators
import { PreloginNavigator } from "./prelogin.navigation";
import { UserNavigator } from "./user.navigation";

// Redux
import { useSelector } from "react-redux";

export const Navigation = () => {
  const { userData } = useSelector((state) => state.auth);

  <NavigationContainer>
    {userData ? <UserNavigator /> : <PreloginNavigator />}
  </NavigationContainer>;
};
