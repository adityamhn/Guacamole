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
} from "../login/login.styles";

import Icon from "react-native-vector-icons/Ionicons";

import { LoginThunk, SignUpThunk } from "../../app/auth.slice";
import { TouchableOpacity } from "react-native";
import { SafeArea } from "../../components/SafeArea.component";
import { useDispatch, useSelector } from "react-redux";
import { Button, Colors, Text, View } from "react-native-ui-lib";
import { Toast } from "react-native-ui-lib/src/incubator";

export default function RegisterPage({ navigation }) {
  const [phoneNumber, setphoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const userData = null;
  // const { userData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const OnSignInClick = async () => {
    setSubmitted(true);
    try {
      dispatch(SignUpThunk({ phoneNumber, password, name }));
      setShow(true);
    } catch (err) {
      console.log("error");
      console.log(err);
    }
    setSubmitted(false);
    setShow(false);
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
            <Toast
              visible={show}
              position={"top"}
              autoDismiss={5000}
              onDismiss={() => setShow(false)}
            ></Toast>
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
            <MainHeading>Create an account</MainHeading>
            <SubHeading>Experience the ease of ordering</SubHeading>
          </TextSection>
          <MainTextInput
            onChangeText={setphoneNumber}
            placeholder="Enter your Phone Number"
            placeholderTextColor={"#858585"}
            autoCapitalize="none"
          />
          <MainTextInput
            onChangeText={setName}
            placeholder="Enter your Name"
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
            <NewHereText>Already a member? </NewHereText>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <SignUpText>Login</SignUpText>
            </TouchableOpacity>
          </SignUpContainer>
          <Button
            onPress={OnSignInClick}
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
            label={"Create Account"}
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
