import { 
    View, 
    Text, 
    StyleSheet 
} from "react-native";

export default function Header() {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.header1}>Hungry?</Text>
            <Text style={styles.header2}>We Got You.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 60,
        marginHorizontal: 25
    },
    header1: {
        fontSize: 35,
        marginTop: 60,
        marginHorizontal: 25
    },
    header2: {
        fontSize: 40,
        fontWeight: "bold",
        marginHorizontal: 25
    }
});