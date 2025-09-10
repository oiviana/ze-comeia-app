import { createStackNavigator } from "@react-navigation/stack";
import { ProductLandingPage } from "../../views/products/ProductLandingPage";
import MainHome from "../../views/HomeTest";
import { ProductPage } from "../../views/products/ProductPage";

export type ProductsStackParamList = {
  MainHome: undefined;
  ProductLandingPage: { categoryId: string }; 
  ProductPage: { productId: string }; 
};


const MainHomeStack = createStackNavigator<ProductsStackParamList>();

export function MainHomeStackNavigator() {
  return (
    <MainHomeStack.Navigator screenOptions={{ headerShown: false }}>
      <MainHomeStack.Screen name="MainHome" component={MainHome} />
           <MainHomeStack.Screen
        name="ProductPage"
        component={ProductPage}
        options={{
          headerShown: true,      // ativa só nessa tela
          title: "Detalhes",      // define o título do headers
        }}
      />
    </MainHomeStack.Navigator>
  );
}