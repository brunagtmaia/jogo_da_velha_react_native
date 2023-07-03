import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity,  StatusBar, Image} from "react-native";

import styles from "../global/style";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Game(){
    const navigation = useNavigation();

    //criando a constante de vai receber os paramentros 
    const route = useRoute();

    //recebendo 
    const { player, board } = route.params;



    //criando os estados da tela de game 
    const [gameboard, setGameBoard] = useState(board);
    //jogador que está jogando no momento é o current player 
    const [currentPlayer, setCurrentPlayer] = useState(player);

    //estado que conta o número de jogadas 
    
    const [remainingMoves, setRemainingMoves] = useState(9);

    function play(row, column){
        gameboard[row][column] = currentPlayer;
        setGameBoard([...gameboard]);

        setCurrentPlayer(currentPlayer == 'X' ? 'O': 'X');

        checkWinner(gameboard, row, column);
    }

    function checkWinner(gameboard, row, column){
        //verificar linhas
        if (gameboard[row][0]!== '' &&
        gameboard[row][0] == gameboard[row][1] &&
        gameboard[row][1] == gameboard[row][2]){
            return finishGame(gameboard[row][0]);
        }

        //verificar colunas
        if (gameboard[0][column] !== '' &&
        gameboard[0][column] == gameboard[1][column] && 
        gameboard[1][column] == gameboard[2][column]){
            return finishGame(gameboard[0][column]);
        }

        //diagonal principal 
        if(gameboard[0][0] !== '' &&
        gameboard[0][0] == gameboard[1][1]&&
        gameboard[1][1] == gameboard[2][2]){
            return finishGame(gameboard[0][0]);
        }

        //diagonal secundária 
        if(gameboard[0][2] !== '' &&
        gameboard[0][2] == gameboard[1][1]&&
        gameboard[1][1] == gameboard[2][0]){
            return finishGame(gameboard[0][2]);
        }

        setRemainingMoves(remainingMoves -1);
    }

    function finishGame(player){
        navigation.navigate('winner', {win: player})
    }

    useEffect(() => {
        if(remainingMoves == 0){
            navigation.navigate('winner', {win: '-'});
        }
    }, [remainingMoves])
    return(
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <Text style={styles.gameTitle}>Jogo da velha</Text>
            {
                board.map((row, nRow) => {
                    return(
                        <View key={nRow} style={styles.inlineItems}>
                            {
                                row.map((column, nColumn) => {
                                    return(
                                        <TouchableOpacity 
                                         key={nColumn}
                                         style={styles.box}
                                         disabled={column !== ''}
                                         onPress={() => play(nRow, nColumn)}
                                        >
                                            <Text style={column == 'X' ? styles.playerX : styles.playerO}>{column}</Text>

                                        </TouchableOpacity>
                                    )
                                })
                            }


                        </View>
                    )
                })
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