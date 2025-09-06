import {Text, View } from 'react-native';
import { ProductShelf } from '../components/product/ProductShelf';

export default function HomeTest() {
    return(
        <View>
            <Text>
                Home Test
            </Text>
            <ProductShelf/>
        </View>
    )
}