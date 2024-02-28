import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors'

const Button = (props) => {
    const filledBgColor = props.color || COLORS.blueLogin;
    const outlinedColor = COLORS.white;
    const bgColor = props.filled ? filledBgColor : outlinedColor;
    const textColor = props.filled ? COLORS.white : COLORS.bleu;

    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                ...{ backgroundColor: bgColor },
                ...props.style
            }}
            onPress={props.onPress}
        >
            <View>
                <Text style={{ fontFamily: "Poppins Bold", fontSize: 15, ... { color: textColor }}}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingBottom: 15,
        paddingVertical: 15,
        borderColor: COLORS.white,
        borderWidth: 2,
        borderRadius: 5,
        width: '100%',
        paddingHorizontal: 0,
        // alignItems: 'center',
        marginBottom: 5,
        flexWrap: "nowrap",
    }
})
export default Button