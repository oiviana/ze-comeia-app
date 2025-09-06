import {ScrollView, Text, View } from 'react-native';
import { ProductCard } from '../components/product/ProductCard';
import ProductShelf from '../components/product/ProductShelf';

export default function HomeTest() {
    return(
        <ScrollView>
            <Text>
                Home Test
            </Text>
            <ProductShelf/>
            <ProductShelf/>
            <ProductShelf/>
        </ScrollView>
    )
}