import { createStackNavigator } from "@react-navigation/stack";
import { ProductLandingPage } from "../../../views/products/ProductLandingPage";
import { ProductsHome } from "../../../views/products/ProductsHome";
import { ProductPage } from "../../../views/products/ProductPage";

export type ProductsStackParamList = {
  Produtos: undefined;
  ProductLandingPage: { categoryId: string }; 
  ProductPage: { productId: string }; 
};


const ProductSearchStack = createStackNavigator<ProductsStackParamList>();

export function ProductSearchStackNavigator() {
  return (
    <ProductSearchStack.Navigator>
      <ProductSearchStack.Screen name="Produtos" component={ProductsHome} />
      <ProductSearchStack.Screen name="ProductLandingPage" component={ProductLandingPage} 
              options={{
          headerShown: true,   
          title: "Produtos", 
        }}/>
      <ProductSearchStack.Screen name="ProductPage" component={ProductPage} 
             options={{
          headerShown: true,   
          title: "Detalhes", 
        }}
      />
    </ProductSearchStack.Navigator>
  );
}