import React, { useState } from "react";
import {
  ForgotPasswordContainer,
  ForgotPasswordText,
  MainContainer,
  MainHeading,
  MainTextInput,
  NewHereText,
  SignUpContainer,
  SignUpText,
  SubHeading,
  TextSection,
  StartedButton,
} from "./login.styles";

import Icon from "react-native-vector-icons/Ionicons";

import { LoginThunk } from "../../app/auth.slice";
import { TouchableOpacity } from "react-native";
import { SafeArea } from "../../components/SafeArea.component";
import { VerticalCenter, HeaderText } from "../../common/Common.styles";
// import { HeaderText } from "../reports/Reports.styles";
import { useDispatch, useSelector } from "react-redux";
import { Button, Colors, Text, View } from "react-native-ui-lib";

export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const userData = null;
  // const { userData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const OnSignInClick = (e) => {
    e.preventDefault();

    setSubmitted(true);
    try {
      dispatch(LoginThunk({ email, password }));
    } catch (err) {
      console.log("error");
      console.log(err);
    }
    setSubmitted(false);
  };

  return (
    <SafeArea out>
      <MainContainer>
        {/* {submitted ? (
          <>
            <VerticalCenter>
              <HeaderText style={{ textAlign: "center", color: "#FFF" }}>
                Logging In
              </HeaderText>
            </VerticalCenter>
          </>
        ) : ( */}
        <>
          <View
            style={{
              width: "90%",
              paddingTop: 20,
            }}
          >
            <Text>
              <Icon
                name={"arrow-back"}
                size={30}
                color={"#E85D04"}
                onPress={() => navigation.goBack()}
              />
              ;
            </Text>
          </View>
          <TextSection>
            <MainHeading>Let's Sign You IN</MainHeading>
            <SubHeading>Welcome Back</SubHeading>
          </TextSection>
          <MainTextInput
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor={"#858585"}
            autoCapitalize="none"
          />
          <MainTextInput
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor={"#858585"}
            secureTextEntry={true}
          />
          {/* <StartedButton
            color="white"
            uppercase={false}
            labelStyle={{ fontSize: 20, fontFamily: "BasisGrotesqueProBold" }}
            onPress={OnSignInClick}
            loading={submitted && userData ? true : false}
          >
            Login
          </StartedButton> */}
          <SignUpContainer>
            <NewHereText>Don't have an account? </NewHereText>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <SignUpText>Sign Up</SignUpText>
            </TouchableOpacity>
          </SignUpContainer>
          <Button
            onPress={() => navigation.navigate("Login")}
            style={{
              marginBottom: 35,

              width: "80%",
            }}
            labelStyle={{
              fontSize: 12,
              fontWeight: "600",
              fontFamily: "PoppinsBold",
              paddingTop: 4,
            }}
            label={"Login"}
            size={Button.sizes.large}
            borderRadius={8}
            backgroundColor={Colors.orange30}
          />
        </>
        {/* )} */}
      </MainContainer>
    </SafeArea>
  );
}
