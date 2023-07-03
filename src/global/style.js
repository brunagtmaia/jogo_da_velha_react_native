import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FFF',
        alignItems:'center',
        justifyContent:'center'
    },
    menuTitle: {
        fontSize:30,
        fontWeight:'bold',
        color: '#333'
    },
    gameTitle:{
        fontSize: 30,
        fontWeight:'bold',
        color:'#333',
        marginBottom: 30
    },
    subtitle:{
        fontSize:20,
        color: '#555',
        marginBottom: 20
    },
    inlineItems: {
        flexDirection: 'row'
    },
    box: {
        width: 80,
        height: 80,
        backgroundColor: '#43425D',
        alignItems: 'center',
        justifyContent:'center',
        margin: 5
    },
    playerX:{
        fontSize: 40,
        color: '#F7D917'
    },
    playerO:{
        fontSize: 40,
        color: '#fc0fc0'
    },
    menuButton:{
        marginTop: 20
    },
    textMenuButton:{
        fontSize: 20,
        color: '#4E6FE4',
        fontWeight:'bold'
    },
    winner:{
        fontSize:29,
        margin: 15,
        fontWeight: 'bold',
        color: '#333'
    },
    boxWinner:{
        alignItems: 'center',
        justifyContent:'center',
        margin:90
    }

})

export default styles;