import {
    View, 
    Text, 
    StyleSheet,
    Image
} from "react-native";
import { elevation } from "../common/styles";

export default function CategoryItem({ name, imageUrl, index }) {
    return (
        <View style={[
            styles.categoryContainer, 
            elevation, 
            index === 0 ? { marginLeft: 25 } : { marginLeft: 15 }
        ]}>
            <View>
                <Image 
                    source={imageUrl}
                    style={styles.categoryIcon}
                />
            </View>
            <Text>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    categoryContainer: {
        width: 70,
        height: 100,
        borderRadius: 50,
        marginVertical: 15,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    elevation,
    categoryIcon: {
        width: 35,
        height: 35
    }
});