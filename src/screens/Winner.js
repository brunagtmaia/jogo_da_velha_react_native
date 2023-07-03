import { View, Text, TouchableOpacity,  StatusBar, Image} from "react-native";
import styles from "../global/style";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";


export default function Winner(){

    const navigation = useNavigation();
    const route = useRoute();

    const {win} = route.params;

    console.log('win', win);

    
    return(
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <Text style={styles.menuTitle}>Jogo da velha</Text> 
            {win == '-' &&
                <Image style={{ width:'90%' }} resizeMode="contain" source={require('../assets/img/deu_velha.png')}/>
            }

            {win !== '-' &&
            <>
                <View style={styles.boxWinner}>
                    <Text style={styles.winner}>Ganhador</Text>
                    <View style={styles.box}>
                        <Text style={win == 'X' ? styles.playerX : styles.playerO}>{win}</Text>
                    </View>
                </View>
            </>
            }

            <TouchableOpacity
                style={styles.menuButton}
                onPress={ () => navigation.navigate('menu')}
            >
                <Text style={styles.textMenuButton}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}