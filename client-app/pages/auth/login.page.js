import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Appbar, Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import { SafeArea } from "../../components/SafeArea.component";

import {
  BACKGROUND_COLOR,
  ORANGE,
  WHITE,
  WHITE_SECONDARY,
} from "../../constants";
import { SignInUser } from "../../services/auth.services";
import { login } from "../../store/user.slice";
import {
  MainText,
  SecondaryText,
  Container,
  FormContainer,
  Input,
  MoreText,
} from "./login.styles";

const LoginScreen = ({ navigation }) => {
  const [form, setForm] = React.useState({
    phoneNumber: "",
    password: "",
  });
  const dispatch = useDispatch();

  const SignIn = async () => {
    console.log("SignIn");
    const res = await SignInUser(form);
    console.log(res);

    if (res.status === 200) {
      console.log("token", res.data.token);
      console.log("user", res.data.userData);
      dispatch(
        login({
          token: res.data.token,
          user: res.data.userData,
        })
      );
    }
  };

  return (
    <SafeArea out>
      <Appbar.Header style={{ backgroundColor: BACKGROUND_COLOR }}>
        <Appbar.BackAction
          onPress={() => navigation.goBack()}
          color={ORANGE}
          size={32}
        />
      </Appbar.Header>
      <Container>
        <MainText>Let’s Sign you In.</MainText>
        <SecondaryText>Welcome back.</SecondaryText>

        <FormContainer>
          <Input
            mode="outlined"
            placeholder="Enter your phone number"
            outlineColor="#0000000"
            activeOutlineColor={"#0000000"}
            selectionColor="#fff"
            onChangeText={(text) => setForm({ ...form, phoneNumber: text })}
            theme={{
              colors: {
                text: "#fff",
                placeholder: WHITE_SECONDARY,
                outlineColor: "transparent",
              },
            }}
          />
          <Input
            mode="outlined"
            onChangeText={(text) => setForm({ ...form, password: text })}
            placeholder="Password"
            outlineColor="#0000000"
            selectionColor="#fff"
            activeOutlineColor={"#0000000"}
            theme={{ colors: { text: "#fff", placeholder: WHITE_SECONDARY } }}
          />
        </FormContainer>

        <View
          style={{
            alignItems: "center",
            position: "absolute",
            bottom: 28,
            marginHorizontal: 24,
            width: "100%",
          }}
        >
          <MoreText>
            Dont have an account?{" "}
            <MoreText
              style={{ color: ORANGE }}
              onPress={() => navigation.navigate("Register")}
            >
              Sign up
            </MoreText>
          </MoreText>
          <Button
            mode="contained"
            color={ORANGE}
            uppercase={false}
            style={{
              width: "100%",
              paddingVertical: 8,
              marginTop: 16,
            }}
            labelStyle={{
              fontSize: 16,
            }}
            onPress={SignIn}
          >
            Login
          </Button>
        </View>
      </Container>
    </SafeArea>
  );
};

export default LoginScreen;
