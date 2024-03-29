import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Appbar, Button } from 'react-native-paper'
import { SafeArea } from '../../components/SafeArea.component'
import { BACKGROUND_COLOR, ORANGE, WHITE, WHITE_SECONDARY } from '../../constants'
import { MainText, SecondaryText, Container, FormContainer, Input, MoreText } from './login.styles'

const RegisterScreen = ({ navigation }) => {
    return (
        <SafeArea out>
            <Appbar.Header style={{ backgroundColor: BACKGROUND_COLOR }}>
                <Appbar.BackAction onPress={() => navigation.goBack()} color={ORANGE} size={32} />
            </Appbar.Header>
            <Container>
                <MainText>create an account</MainText>
                <SecondaryText>Experience the new
                    way of Dine in.</SecondaryText>

                <FormContainer>
                    <Input
                        mode="outlined"
                        placeholder="Enter your Name"
                        outlineColor="#0000000"
                        activeOutlineColor={"#0000000"}
                        selectionColor="#fff"
                        theme={{ colors: { text: "#fff", placeholder: WHITE_SECONDARY, outlineColor: 'transparent' } }} />
                    <Input
                        mode="outlined"
                        placeholder="Enter your phone number"
                        outlineColor="#0000000"
                        activeOutlineColor={"#0000000"}
                        selectionColor="#fff"
                        theme={{ colors: { text: "#fff", placeholder: WHITE_SECONDARY, outlineColor: 'transparent' } }} />
                    <Input
                        mode="outlined"
                        placeholder="Password"
                        outlineColor="#0000000"
                        selectionColor="#fff"
                        activeOutlineColor={"#0000000"}
                        theme={{ colors: { text: "#fff", placeholder: WHITE_SECONDARY } }} />
                </FormContainer>

                <View style={{ alignItems: 'center', position: "absolute", bottom: 28, marginHorizontal: 24, width: "100%" }}>

                    <MoreText>Already a member? <MoreText style={{ color: ORANGE }} onPress={() => navigation.navigate("Login")}>Login</MoreText></MoreText>
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
                            fontSize: 16
                        }}
                    >
                        Sign up
                    </Button>
                </View>


            </Container>
        </SafeArea>
    )
}

export default RegisterScreen