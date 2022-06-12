import React from 'react'
import { ORANGE } from '../../constants'
import { Button } from 'react-native-paper';

const GButton = ({ children, ...props }) => {
    return (
        <Button
            icon={props.icon}
            mode={props.mode}
            onPress={props.onPress}
            color={props.color || ORANGE}
            uppercase={props.uppercase || false}
            style={props.style}
            labelStyle={{ color: "#fff", ...props.labelStyle }}
            loading={props.loading}
        >
            {children}
        </Button>
    )
}

export default GButton