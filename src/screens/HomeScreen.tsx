import React from "react";
import { Action } from "redux";
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    ListRenderItem,
    ActivityIndicator,
    Dimensions,
    ScaledSize,
} from 'react-native';
import { ItemCard } from '../components/ItemCard'
import { KittenInfo } from '../types';
import { getKittenImages as getKittenImagesAction } from '../store/actions/kittens';
import { RootState } from '../store/reducers';
import { ThunkDispatch } from "redux-thunk";
import { connect, ConnectedProps } from 'react-redux';
import { ChangeNumberOfListItemsModal } from '../components/ChangeNumberOfListItemsModal'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Routes';

type NavigationProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>
};

const IMAGE_WIDTH_SCALE = 0.85;
const IMAGE_HEIGHT_SCALE = 0.3;

const window = Dimensions.get("window");

type HomeScreenState = {
    kittenNames: string[],
    numberOfItems: number,
    window: ScaledSize
}

const mapStateToProps = (state: RootState) => ({
    kittenImages: state.kittens.images,
    loading: state.kittens.isLoading,
    error: state.kittens.error
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, Action>) => ({
    getImages: (urls: string[]) => dispatch(getKittenImagesAction(urls))
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type HomeScreenProps = ConnectedProps<typeof connector> & NavigationProps;

class HomeScreen extends React.PureComponent<HomeScreenProps, HomeScreenState> {
    state: HomeScreenState = {
        kittenNames: ["Luna", "Bella", "Lucy", "Kitty", "Lily", "Nala", "Chloe", "Cleo", "Stella", "Sophie",
            "Oliver", "Leo", "Milo", "Charlie", "Simba", "Max", "Jack", "Loki", "Tiger", "Jasper"
        ],
        numberOfItems: 30,
        window: window
    }

    componentDidMount() {
        Dimensions.addEventListener("change", this.onChangeDimentions);
        const imageWidth = Math.floor(this.state.window.width * IMAGE_WIDTH_SCALE)
        const imageHeight = Math.floor(this.state.window.height * IMAGE_HEIGHT_SCALE);

        const imageUrls = [];
        for (let i = 0; i < 16; i++) {
            imageUrls.push(`https://placekitten.com/${imageWidth}/${imageHeight}?image=${i}`);
        }

        this.props.getImages(imageUrls);
    }

    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.onChangeDimentions);
    }

    onChangeDimentions = (dim: {window: ScaledSize, screen:ScaledSize}) => {
        this.setState({window: dim.window})
    }

    generateKittenInfo = (images: string[], names: string[], numOfItems: number): KittenInfo[] => {
        const kittensInfo = [];
        let nameIndex;
        let imageIndex;

        for (let i = 0; i < numOfItems; i++) {
            nameIndex = Math.floor( Math.random() * names.length);
            imageIndex = Math.floor(Math.random() * images.length);

            kittensInfo.push({
                id: (i+1).toString(),
                name: names[nameIndex],
                image: images[imageIndex]
            });
        }
        return kittensInfo;
    }

    renderItem: ListRenderItem<KittenInfo> = ({ item }) => {
        const width = Math.floor(this.state.window.width * IMAGE_WIDTH_SCALE);
        const height = Math.floor(this.state.window.height * IMAGE_HEIGHT_SCALE);
        return <ItemCard
            id={item.id}
            name={item.name}
            image={item.image}
            imageWidth={width}
            imageHeight={height}
            onPress={() => this.props.navigation.navigate('KittenDescription', {
                ...item,
                imageWidth: width,
                imageHeight: height
            })}
        />
    }

    onSetNumberOfItems = (numberOfItems: number) => {
        this.setState({numberOfItems: numberOfItems});
    }
    
    render() {
        return this.props.error ? 
            <View style={[styles.mainView, styles.loadingErrorView]}>
                <Text>Unable to load images</Text>
            </View>
            : this.props.loading ?
                <View style={[styles.mainView, styles.loadingErrorView]}>
                    <ActivityIndicator color="#0000ff" /> 
                </View>
                : <View style={styles.mainView}>
                    <ChangeNumberOfListItemsModal
                        width={this.state.window.width}
                        setNumberOfItems={this.onSetNumberOfItems}
                        numberOfItems={this.state.numberOfItems}
                    />
                    <FlatList
                        data={this.generateKittenInfo(this.props.kittenImages, this.state.kittenNames,
                            this.state.numberOfItems)}
                        keyExtractor={kitten => kitten.id}
                        renderItem={this.renderItem}
                        showsVerticalScrollIndicator={false}
                    />
                </View> 
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        padding: 15,
        paddingBottom: 0

    },
    loadingErrorView: {
        justifyContent: 'center'
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
  

  
export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);