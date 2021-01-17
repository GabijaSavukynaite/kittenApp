import React from 'react';
import {
    Modal,
    Text,
    StyleSheet,
    Button,
    View,
    TouchableOpacity
} from 'react-native';
import { NumberOfItemsButton } from './NumberOfItemsButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type ModalProps = {
    width: number,
    numberOfItems: number
    setNumberOfItems: (numberOfItems: number) => void
}

type ModalState = {
    isOpen: boolean
}


export class ChangeNumberOfListItemsModal extends React.PureComponent<ModalProps,ModalState> {
    state: ModalState = {
        isOpen: false
    }

    onSetChangeItemsNumModalVisible = (visible: boolean) => {
        this.setState({isOpen: visible});
    }

    onNumberOfItemsButtonPress = (numberOfItems: number) => {
        this.props.setNumberOfItems(numberOfItems);
        this.onSetChangeItemsNumModalVisible(false);
    }

    render() {
        const modalSize = {
            width: this.props.width * 0.9
        }
        return <View style={{ width: '100%' }}>
                <View style={styles.icon}>
                    <MaterialCommunityIcons
                        name="filter"
                        size={30}
                        color="#260801"
                        onPress={() => this.onSetChangeItemsNumModalVisible(true)}
                    />
                </View>
                <Modal
                    visible={this.state.isOpen}
                    transparent={true}
                >
                    <View style={styles.mainView}>
                        <View style={[styles.modalView, modalSize]}>
                            <Text style={styles.text}>Number of items</Text>
                            <View style={styles.numberOfItemsButtons}>
                                <NumberOfItemsButton numOfItems={30}
                                    onPress={this.onNumberOfItemsButtonPress}
                                    width={this.props.width}
                                    active={this.props.numberOfItems !== 30}
                                />
                                <NumberOfItemsButton numOfItems={50} 
                                    onPress={this.onNumberOfItemsButtonPress}
                                    width={this.props.width}
                                    active={this.props.numberOfItems !== 50}
                                />
                                <NumberOfItemsButton numOfItems={100}
                                    onPress={this.onNumberOfItemsButtonPress}
                                    active={this.props.numberOfItems !== 100}
                                    width={this.props.width}
                                />
                            </View>
                        <View style={{width: '100%'}}>
                            <Button
                                title="close"
                                color="#260801"
                                onPress={() => this.onSetChangeItemsNumModalVisible(false)}
                            />
                        </View>
                        </View>
                    </View>
                </Modal>
        </View>
        }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#000000aa'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
    },
    numberOfItemsButtons: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        padding: 5,
        marginBottom: 30,
        marginTop: 30
    },
    text: {
        fontSize: 20,
        color: '#260801'
    },
    icon: {
        alignItems: 'flex-end',
        marginTop: 10
    }
})