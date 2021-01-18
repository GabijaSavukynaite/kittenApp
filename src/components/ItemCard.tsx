import React from "react";
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { KittenInfo, ImageSize } from '../types';

interface NavigationProps {
    onPress: () => void
}
    
export const ItemCard: React.FC<KittenInfo & ImageSize & NavigationProps> = ({
    name,
    image,
    id,
    imageWidth,
    imageHeight,
    onPress
}) => {
    return <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={onPress}>
                <View style={styles.main}>
                    <Image style={{width: imageWidth, height: imageHeight}} source={{ uri: image }}/>
                    <Text style={styles.name}>{name}</Text>
                </View>
        </TouchableHighlight>
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#E8E2E2',
        padding: 10,
        marginBottom: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#260801',
        marginTop: 10,
    }
  });
    
