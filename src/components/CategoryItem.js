import {
    View, 
    Text, 
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
import { elevation } from "../common/styles";

export default function CategoryItem({ 
    name, 
    imageUrl, 
    index,
    active,
    handlePress
}) {
    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={[
                styles.container, 
                elevation, 
                index === 0 ? { marginLeft: 20 } : { marginLeft: 15 },
                active ? { backgroundColor: "pink" } : { backgroundColor: "white" }
            ]}>
                <View style={styles.iconContainer}>
                    <Image 
                        source={imageUrl}
                        style={styles.icon}
                    />
                </View>
                <Text>{name}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 100,
        borderRadius: 50,
        marginVertical: 15,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    elevation,
    icon: {
        width: 35,
        height: 35,
        backgroundColor: "white"
    },
    iconContainer: {
        width: 50,
        height: 50,
        backgroundColor: "white",
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center"
    }
});