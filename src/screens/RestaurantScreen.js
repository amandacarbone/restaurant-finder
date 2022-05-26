import { 
    View, 
    Text,
    Image,
    StyleSheet,
    FlatList,
    Dimensions,
    ActivityIndicator
} from "react-native";
import { useEffect, useState } from "react";
import yelp from "../api/yelp";

function RestaurantScreen({ navigation }) {

    const id = navigation.getParam("id");

    const [results, setResults] = useState({
        data: null,
        loading: false,
        error: null
    });

    useEffect(() => {
        getRestaurant();
    }, []);

    const dimensions = Dimensions.get("window");
    const imageHeight = Math.round((dimensions.width *9) / 16);
    const imageWidth = dimensions.width;

    async function getRestaurant() {
        setResults({
            data: null,
            loading: true,
            error: null
        });
        try {
            const response = await yelp.get(`/${id}`);

            setResults({
                data: response.data,
                loading: false,
                error: null
            });
        } catch {
            setResults({
                data: null,
                loading: false,
                error: "Something went wrong"
            });
        }
    };

    if (results.loading) return <ActivityIndicator size="large" marginVertical={30}/>

    if (results.error) return <Text>{error}</Text>

    return (
        <View>
          {results.data && (
            <FlatList
              data={results.data.photos}
              keyExtractor={(photo) => photo}
              renderItem={({ item }) => {
                return (
                  <Image
                    style={{ height: imageHeight, width: imageWidth }}
                    source={{ uri: item }}
                  />
                );
              }}
            />
          )}
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1
    }
});

export default RestaurantScreen;