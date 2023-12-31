import { View, Text, TouchableOpacity,  StatusBar, Image} from "react-native";
import styles from "../global/style";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";


export default function Menu(){

    const navigation = useNavigation();

    const [board, setBoard] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]);
    function startGame (player){
        setBoard([
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]);
        navigation.navigate('game', {player: player, board: board});
    }
    return(
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <Text style={styles.menuTitle}>Jogo da velha</Text>
            <Image style={{ width:'90%' }} resizeMode="contain" source={require('../assets/img/velhas.png')}/>


            <Text style={styles.subtitle}>Quem irá começar?</Text>
            <View style={styles.inlineItems}>
                <TouchableOpacity style={styles.box} onPress={() => startGame('X')}>
                    <Text style={styles.playerX}>X</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={() => startGame('O')}>
                    <Text style={styles.playerO}>O</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}