import { 
    View, 
    Text, 
    StyleSheet, 
    ActivityIndicator, 
    FlatList 
} from "react-native";
import { useEffect } from "react";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantItem from "./RestaurantItem";

export default function Restaurants({ term }) {

    const [{ data, loading, error }, searchRestaurants] = useRestaurants();

    useEffect(() => {
        searchRestaurants(term);
    }, [term]);

    if (loading) return <ActivityIndicator size="large" marginVertical={30}/>;
    
    if (error) return <Text>{error}</Text>;

    return (
        <View>
            <Text style={styles.header}>Top Restaurants</Text>
            <FlatList
                data={data}
                keyExtractor={(restaurant) => restaurant.id}
                renderItem={({ item }) => (
                    <RestaurantItem restaurant={item}/>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 10,
        marginLeft: 25
    }
});