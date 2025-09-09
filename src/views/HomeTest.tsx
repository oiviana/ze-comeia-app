import {ScrollView, Text} from 'react-native';
import ProductShelf from '../components/product/ProductShelf';

export default function MainHome() {
    return(
        <ScrollView>
            <Text>
                Home Test
            </Text>
            <ProductShelf shelfTitle='Teste'/>
            <ProductShelf shelfTitle='Teste 2'/>
            <ProductShelf shelfTitle='Teste 4'/>
        </ScrollView>
    )
}