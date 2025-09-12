import { ScrollView, StyleSheet, Text, View } from "react-native";

export function Orders(){

    return(
        <ScrollView>
           <View>
            <Text>Pedido n˚ 34324234</Text>
            <Text>Sexta, 25 de julho de 2025</Text>
            <View>
                <Text>Pedido em Andamento</Text>
                <View>
                    <Text>1</Text> <Text>Heineken 300ML</Text>
                </View>
                <View>
                    <Text>+ 4 itens</Text>
                </View> 
            </View>
           </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})