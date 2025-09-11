import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductShelf from '../../components/product/ProductShelf';

export function MainHome() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <ProductShelf shelfTitle='Teste' />
                <ProductShelf shelfTitle='Teste 2' />
                <ProductShelf shelfTitle='Teste 4' />
            </ScrollView>
        </SafeAreaView>
    )
}