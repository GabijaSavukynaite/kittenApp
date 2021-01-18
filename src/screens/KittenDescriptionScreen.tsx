import React from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Routes';
import { RouteProp } from '@react-navigation/native';

type KittenDescriptionScreenRouteProp = RouteProp<RootStackParamList, 'KittenDescription'>;

type KittenDescriptionScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'KittenDescription'
>;

type Props = {
  route: KittenDescriptionScreenRouteProp;
  navigation: KittenDescriptionScreenNavigationProp;
};

export const KittenDescriptionScreen: React.FC<Props> = ({ route, navigation}) => {
        return <View style={styles.mainView}>
            <Text style={styles.name}>{route.params.name}</Text>  
            <Image style={{
                width: route.params.imageWidth,
                height: route.params.imageHeight
            }}
                source={{ uri: route.params.image }} />
            <ScrollView style={{width: route.params.imageWidth}}>
                <Text style={styles.descrptionText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quae cum dixisset paulumque institisset, Quid est? Non autem hoc:
                    igitur ne illud quidem. Quas enim kakaw Graeci appellant, vitia malo quam malitias nominare. Sed residamus, inquit, si placet.
                    Non quaero, quid dicat, sed quid convenienter possit rationi et sententiae suae dicere. Quae cum essent dicta, discessimus. Gloriosa ostentatio in constituendo summo bono.
                    Duo Reges: constructio interrete.
                </Text>
            </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        padding: 5
    },
    descrptionText: {
        fontSize: 18
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#260801'
    }
});