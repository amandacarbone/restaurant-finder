import {
  View,
  FlatList
} from 'react-native';
import { useState } from "react";
import CategoryItem from './src/components/CategoryItem';
import Header from './src/components/Header';
import Search from './src/components/Search';

export default function App() {

  const [term, setTerm] = useState("Burger");

  const commonCategories = [
    {
      name: "Burger",
      imageUrl: require("./src/assets/icons/burger.png")
    },
    {
      name: "Pizza",
      imageUrl: require("./src/assets/icons/pizza.png")
    },
    {
      name: "Dessert",
      imageUrl: require("./src/assets/icons/cake.png")
    },
    {
      name: "Drinks",
      imageUrl: require("./src/assets/icons/smoothies.png")
    },
    {
      name: "Steak",
      imageUrl: require("./src/assets/icons/steak.png")
    },
    {
      name: "Pasta",
      imageUrl: require("./src/assets/icons/pasta.png")
    }
  ];

  return (
    <View>
      <Header/>
      <Search
        setTerm={setTerm}
      />
      <FlatList
        data={commonCategories}
        renderItem={({ item, index }) => {
          return <CategoryItem 
                    name={item.name} 
                    imageUrl={item.imageUrl} 
                    index={index}
                    active={item.name === term}
                    handlePress={() => setTerm(item.name)}
                  />
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.name}
      />
    </View>
  );
}
