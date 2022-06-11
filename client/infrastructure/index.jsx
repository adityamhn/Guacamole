import React from "react";

import { NavigationContainer } from "@react-navigation/native";

// Navigators
import { PreLoginNavigator } from "./prelogin.navigation";
import { UserNavigator } from "./user.navigation";

// Redux
import { useSelector } from "react-redux";

export const Navigation = () => {
  const { userData } = useSelector((state) => state.auth);
  console.log("here");
  return (
    <NavigationContainer>
      {userData ? <UserNavigator /> : <PreLoginNavigator />}
    </NavigationContainer>
  );
};
