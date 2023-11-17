import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import TopByDateScreen from "./screens/TopByDateScreen";

import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";

const Stack = createStackNavigator();

import data from "./db.json";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [jsonData, setJsonData] = useState([]);

  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedLocation1, setSelectedLocation1] = useState(null);
  const [selectedLocation2, setSelectedLocation2] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //timeout to simulate fetching data
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setJsonData(data.data);
        setSelectedDay(() => data.data[0].day);
        setSelectedLocation1(() => data.data[0].locations[0]);
        setSelectedLocation2(() => data.data[0].locations[1]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#C43042" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LocationComparison">
        <Stack.Screen
          name="Home"
          children={(props) => (
            <HomeScreen
              {...props}
              data={jsonData}
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
              selectedLocation1={selectedLocation1}
              setSelectedLocation1={setSelectedLocation1}
              selectedLocation2={selectedLocation2}
              setSelectedLocation2={setSelectedLocation2}
            />
          )}
        />
        <Stack.Screen
          name="TopByDate"
          children={(props) => (
            <TopByDateScreen
              {...props}
              data={jsonData}
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
              selectedLocation1={selectedLocation1}
              setSelectedLocation1={setSelectedLocation1}
              selectedLocation2={selectedLocation2}
              setSelectedLocation2={setSelectedLocation2}
            />
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
