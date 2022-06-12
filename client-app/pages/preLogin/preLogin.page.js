import React from 'react'
import { SafeArea } from "../../components/SafeArea.component";
import { Image } from "react-native";
import { Container, OrangeText, TitleText } from './preLogin.styles';
import { Button } from 'react-native-paper';
import { ORANGE } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const PreLoginScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeArea out>
            <Container>
                <Image
                    source={require("../../assets/guac.png")}
                />


                {[require("../../assets/burger.png")].map((item, idx) => (
                    <React.Fragment key={idx}>
                        <Image
                            source={item}
                            style={{
                                marginTop: 82,
                                marginBottom: 32
                            }}
                        />
                        <TitleText>
                            The New <OrangeText>Dine In</OrangeText> Experience
                        </TitleText>
                    </React.Fragment>
                ))}

                <Button
                    mode="contained"
                    color={ORANGE}
                    uppercase={false}
                    style={{
                        width: "80%",
                        position: "absolute",
                        bottom: 28,
                        paddingVertical: 8
                    }}
                    labelStyle={{
                        fontSize: 16
                    }}
                    onPress={() => navigation.navigate("Login")}
                >
                    Get Started
                </Button>

            </Container>
        </SafeArea>
    )
}

export default PreLoginScreen