import React from 'react'
import { View } from 'react-native'
import { Appbar, Button, Card, Divider, Text } from 'react-native-paper'
import { SafeArea } from '../../components/SafeArea.component'
import { BACKGROUND_COLOR, ORANGE, WHITE } from '../../constants'
import { Container } from '../auth/login.styles'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { OrangeDivider, SectionTitle } from './payment.styles'


const PaymentScreen = ({ navigation }) => {
    return (
        <SafeArea out>
            <Appbar.Header style={{ backgroundColor: BACKGROUND_COLOR }}>
                <Appbar.BackAction onPress={() => navigation.goBack()} color={WHITE} size={32} />
                <Appbar.Content title="Pay Bill" style={{ marginLeft: -16 }} />
            </Appbar.Header>
            <Container style={{ width: '100%' }}>

                <Card style={{ backgroundColor: "#2b2b2b", borderRadius: 6 }}>
                    <Card.Content style={{paddingHorizontal:16,paddingVertical:16}}>
                        <View style={{flexDirection: 'row',width: "100%",alignItems: "center",justifyContent: "space-between",marginVertical:8}}>
                            <View style={{flexDirection: 'row',alignItems: "center"}}>
                                <Text style={{ color: WHITE, marginRight: 12 }}>Chicken Burger</Text>
                                <Icon name="close" style={{ color: WHITE }} /><Text style={{ color: WHITE }}>1</Text>
                            </View>
                            <Text style={{ color: ORANGE}}>₹250</Text>
                        </View>
                        <View style={{flexDirection: 'row',width: "100%",alignItems: "center",justifyContent: "space-between",marginVertical:8}}>
                            <View style={{flexDirection: 'row',alignItems: "center"}}>
                                <Text style={{ color: WHITE, marginRight: 12 }}>Chicken Burger</Text>
                                <Icon name="close" style={{ color: WHITE }} /><Text style={{ color: WHITE }}>1</Text>
                            </View>
                            <Text style={{ color: ORANGE}}>₹250</Text>
                        </View>
                        <View style={{flexDirection: 'row',width: "100%",alignItems: "center",justifyContent: "space-between",marginVertical:8}}>
                            <View style={{flexDirection: 'row',alignItems: "center"}}>
                                <Text style={{ color: WHITE, marginRight: 12 }}>Chicken Burger</Text>
                                <Icon name="close" style={{ color: WHITE }} /><Text style={{ color: WHITE }}>1</Text>
                            </View>
                            <Text style={{ color: ORANGE}}>₹250</Text>
                        </View>
                        <View style={{flexDirection: 'row',width: "100%",alignItems: "center",justifyContent: "space-between",marginVertical:8}}>
                            <View style={{flexDirection: 'row',alignItems: "center"}}>
                                <Text style={{ color: WHITE, marginRight: 12 }}>Chicken Burger</Text>
                                <Icon name="close" style={{ color: WHITE }} /><Text style={{ color: WHITE }}>1</Text>
                            </View>
                            <Text style={{ color: ORANGE}}>₹250</Text>
                        </View>
                        
                    </Card.Content>
                </Card>

                <SectionTitle>Offers & Benefits</SectionTitle>
                <Card style={{ backgroundColor: "#2b2b2b", borderRadius: 6 }}>
                    <Card.Content style={{paddingHorizontal:16,paddingVertical:16}}>
                        <View style={{flexDirection: 'row',width: "100%",alignItems: "center",justifyContent: "space-between",marginVertical:8}}>
                            <View style={{flexDirection: 'row',alignItems: "center"}}>
                                <Text style={{ color: WHITE, marginRight: 12 }}>Apply Coupon</Text>
                            </View>
                            <Icon name="keyboard-arrow-right" style={{ color: WHITE }} />
                        </View>
                      
                       
                        
                    </Card.Content>
                </Card>

                <SectionTitle>Bill Detail</SectionTitle>
                <Card style={{ backgroundColor: "#2b2b2b", borderRadius: 6 }}>
                    <Card.Content style={{paddingHorizontal:16,paddingVertical:16}}>
                        <View style={{flexDirection: 'row',width: "100%",alignItems: "center",justifyContent: "space-between",marginVertical:8}}>
                            <View style={{flexDirection: 'row',alignItems: "center"}}>
                                <Text style={{ color: WHITE, marginRight: 12 }}>Items Total</Text>
                            </View>
                            <Text style={{ color: ORANGE}}>₹250</Text>
                        </View>

                        <View style={{flexDirection: 'row',width: "100%",alignItems: "center",justifyContent: "space-between",marginVertical:8}}>
                            <View style={{flexDirection: 'row',alignItems: "center"}}>
                                <Text style={{ color: WHITE, marginRight: 12 }}>GST</Text>
                            </View>
                            <Text style={{ color: ORANGE}}>₹25</Text>
                        </View>
                       
                        <View style={{flexDirection: 'row',width: "100%",alignItems: "center",justifyContent: "space-between",marginVertical:8}}>
                            <View style={{flexDirection: 'row',alignItems: "center"}}>
                                <Text style={{ color: WHITE, marginRight: 12 }}>Discount</Text>
                            </View>
                            <Text style={{ color: ORANGE}}>- ₹250</Text>
                        </View>
                        <OrangeDivider />
                        <View style={{flexDirection: 'row',width: "100%",alignItems: "center",justifyContent: "space-between",marginVertical:8}}>
                            <View style={{flexDirection: 'row',alignItems: "center"}}>
                                <Text style={{ color: WHITE, marginRight: 12 }}>Total Payable</Text>
                            </View>
                            <Text style={{ color: ORANGE}}>₹25000</Text>
                        </View>
                    </Card.Content>
                </Card>


                <View style={{ alignItems: 'center', position: "absolute", bottom: 28, width: "100%", marginHorizontal: 24 }}>
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
                        Pay Now
                    </Button>
                </View>
            </Container>
        </SafeArea>
    )
}

export default PaymentScreen