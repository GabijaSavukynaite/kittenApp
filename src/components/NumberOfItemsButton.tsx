import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface NumberOfItemsButtonProps {
    numOfItems: number,
    width: number,
    active: boolean,
    onPress: (numOfItems: number) => void
}

export const NumberOfItemsButton: React.FC<NumberOfItemsButtonProps> = ({ 
    numOfItems,
    onPress,
    active,
    width
}) => {
    const buttonSize = {
        height: width * 0.15,
        width: width * 0.15
    }

    const buttonStyle = [styles.root, buttonSize];

    return <TouchableOpacity 
        activeOpacity={1}
        disabled={!active}
        onPress={() => onPress(numOfItems)}
        style={active ? buttonStyle : [buttonStyle, styles.disabled]}
    >
        <Text style={styles.text}>{numOfItems}</Text> 
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '#BE3E35',
    },
    text: {
        fontSize: 20,
        color: '#260801'
    },
    disabled: {
        opacity: 0.5
    }
});