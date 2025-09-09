import { ScrollView } from "react-native";
import { CategoryMainShelf } from "../../components/category/CategoryMainShelf";
import ProductShelf from "../../components/product/ProductShelf";
import { BrandsMainShelf } from "../../components/brands/BrandsMainShelf";

export function ProductsHome(){

    return(
        <ScrollView>
            <CategoryMainShelf shelfTitle="Categorias"/>
            <ProductShelf shelfTitle="Cervejas"/>
            <BrandsMainShelf/>
            <ProductShelf shelfTitle="Petiscos"/>
        </ScrollView>
    )
}