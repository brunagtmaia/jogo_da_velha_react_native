import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "../screens/Menu";

const {Navigator, Screen} = createNativeStackNavigator();
 
export default function AppRoutes(){
    return(
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name="menu" component={Menu}/>
        </Navigator>
    )
}