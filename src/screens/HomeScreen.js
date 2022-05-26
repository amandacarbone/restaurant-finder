import { View, StyleSheet } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Restaurants from "../components/Restaurants";

export default function Home() {

    const [term, setTerm] = useState("Burger");

    const commonCategories = [
      {
        name: "Burger",
        imageUrl: require("../assets/icons/burger.png")
      },
      {
        name: "Pizza",
        imageUrl: require("../assets/icons/pizza.png")
      },
      {
        name: "Dessert",
        imageUrl: require("../assets/icons/cake.png")
      },
      {
        name: "Drinks",
        imageUrl: require("../assets/icons/smoothies.png")
      },
      {
        name: "Steak",
        imageUrl: require("../assets/icons/steak.png")
      },
      {
        name: "Pasta",
        imageUrl: require("../assets/icons/pasta.png")
      }
    ];

    return (
        <View>
            <Header/>
            <Search setTerm={setTerm}/>
            <Categories 
                categories={commonCategories} 
                term={term} 
                setTerm={setTerm}
            />
            <Restaurants term={term}/>
            <StatusBar/>
        </View>
    );
};