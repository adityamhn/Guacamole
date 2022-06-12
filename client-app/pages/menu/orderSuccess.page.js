import React from 'react'
import {  Text } from 'react-native'
import { SafeArea } from '../../components/SafeArea.component'
import { Container } from '../auth/login.styles'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Order, OrderContainer, OrderItem, OrderSubTitle, OrderTitle } from './menu.styles';
import { Button } from 'react-native-paper';
import { WHITE , ORANGE} from '../../constants';


const OrderSuccessScreen = ({navigation}) => {
    return (
        <SafeArea out>
            <Container style={{ width: '100%' }}>

                <OrderContainer>
                    <Order>
                        <OrderTitle>Hurray!!!</OrderTitle>
                        <OrderSubTitle>Your order has been sent to the kitchen, waiter will be at your table soon with the order.</OrderSubTitle>

                        <OrderItem>
                            <Text style={{color:WHITE,marginRight:12}}>Chicken Burger</Text>
                            <Icon name="close" style={{color:WHITE}} /><Text style={{color:WHITE}}>1</Text>
                        </OrderItem>
                        <OrderItem>
                            <Text style={{color:WHITE,marginRight:12}}>Chicken Burger</Text>
                            <Icon name="close" style={{color:WHITE}} /><Text style={{color:WHITE}}>1</Text>
                        </OrderItem>
                        <OrderItem>
                            <Text style={{color:WHITE,marginRight:12}}>Chicken Burger</Text>
                            <Icon name="close" style={{color:WHITE}} /><Text style={{color:WHITE}}>1</Text>
                        </OrderItem>

                        <Button
                        uppercase={false}
                        style={{
                            backgroundColor:ORANGE,
                            borderRadius:20,
                            marginTop:20
                        }}
                        color={WHITE}
                        onPress={() => navigation.goBack()}
                        >Okay</Button>

                    </Order>
                </OrderContainer>
            </Container>
        </SafeArea>
    )
}

export default OrderSuccessScreen