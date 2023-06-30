import { View, Text, TouchableOpacity,  StatusBar, Image} from "react-native";
import styles from "../global/style";
import { useNavigation } from "@react-navigation/native";


export default function Menu(){
    return(
        <View style={styles.container}>
            <Text>Menu</Text>
        </View>
    )
}