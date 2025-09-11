import { createStackNavigator } from "@react-navigation/stack";
import { MainHome } from "../../../views/home";
import { ProductPage } from "../../../views/products/ProductPage";

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
          headerShown: true,
          title: "Detalhes",
        }}
      />
    </MainHomeStack.Navigator>
  );
}