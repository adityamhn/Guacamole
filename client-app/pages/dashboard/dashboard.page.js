import React from 'react'
import { Image, View } from 'react-native'
import { Avatar } from 'react-native-paper'
import { SafeArea } from '../../components/SafeArea.component'
import { WHITE, WHITE_SECONDARY } from '../../constants'
import { Container, Input, MainText } from '../auth/login.styles'
import { OrangeText } from '../preLogin/preLogin.styles'
import { ActionButton, ActionButtonText, AddressText, DashboardContainer } from './dashboard.styles'
import Icon from 'react-native-vector-icons/MaterialIcons';

const DashboardScreen = ({ navigation }) => {
    return (
        <SafeArea out>
            <Container style={{ width: '100%' }}>
                <View style={{ marginTop: 24, width: "100%", display: "flex", flexDirection: 'row', justifyContent: "space-between",alignItems: "center"}}>
                    <Image source={require('../../assets/logo.png')} width={24} height={24}/>
                    <Avatar.Image size={32} source={{ uri: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" }} />
                </View>

                <DashboardContainer>
                    <MainText style={{ fontSize: 20 }}>Hello, <OrangeText>Aditya</OrangeText></MainText>
                    <AddressText>Koramanagala, South Bengaluru</AddressText>
                    <Input
                        mode="outlined"
                        placeholder="Look for restaurants"
                        outlineColor="#0000000"
                        selectionColor="#fff"
                        style={{ width: "100%", marginTop: 36 }}
                        activeOutlineColor={"#0000000"}
                        theme={{ colors: { text: "#fff", placeholder: WHITE_SECONDARY } }} />

                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: 16 }}>

                        <ActionButton onPress={() => navigation.navigate("Scan")}>
                            <Icon name="qr-code-scanner" size={36} color={WHITE} />
                            <ActionButtonText>Scan N order</ActionButtonText>
                        </ActionButton>
                        <ActionButton>
                            <Icon name="local-dining" size={36} color={WHITE} />
                            <ActionButtonText>Book a Table</ActionButtonText>
                        </ActionButton>
                    </View>
                </DashboardContainer>
            </Container>
        </SafeArea>
    )
}

export default DashboardScreen