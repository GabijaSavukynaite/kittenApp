import React from "react";
import { Text, View, StyleSheet, Image } from 'react-native';
import { KittenInfo } from '../types';

interface ImageSize {
    imageWidth:  number,
    imageHeight: number
}
    
export const ItemCard: React.FC<KittenInfo & ImageSize> = ({
    name,
    image,
    id,
    imageWidth,
    imageHeight
}) => {
    return <View style={styles.main}>
        <Image style={{width: imageWidth, height: imageHeight}} source={{ uri: image }}/>
        <Text style={styles.name}>{name}</Text>
    </View>
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#E8E2E2',
        padding: 10,
        marginBottom: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#260801',
        marginTop: 10
    }
  });
    
