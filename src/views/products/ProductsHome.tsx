import { ScrollView } from "react-native";
import { CategoryMainShelf } from "../../components/category/CategoryMainShelf";

export function ProductsHome(){

    return(
        <ScrollView>
            <CategoryMainShelf/>
        </ScrollView>
    )
}