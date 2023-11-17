import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import uuid from "react-native-uuid";
import RNPickerSelect from "react-native-picker-select";

import handleDayChange from "../helpers/handleDayChange";
import handleLocation1Change from "../helpers/handleLocation1Change";
import handleLocation2Change from "../helpers/handleLocation2Change";

const HomeScreen = (props) => {
  const {
    navigation,
    data,
    selectedDay,
    setSelectedDay,
    selectedLocation1,
    setSelectedLocation1,
    selectedLocation2,
    setSelectedLocation2,
  } = props;

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#fff" }}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 16,
          color: "#C43042",
        }}
      >
        Location Comparison
      </Text>
      <RNPickerSelect
        value={selectedDay}
        onValueChange={(itemValue) =>
          handleDayChange(
            itemValue,
            data,
            setSelectedDay,
            setSelectedLocation1,
            setSelectedLocation2
          )
        }
        items={data.map((item) => ({
          label: `${item.day}/${item.month}/${item.year}`,
          value: item.day,
        }))}
      />

      <RNPickerSelect
        value={selectedLocation1}
        onValueChange={(itemValue) =>
          handleLocation1Change(itemValue, setSelectedLocation1)
        }
        items={data
          .find((item) => item.day === selectedDay)
          .locations.map((location) => ({
            label: location.name,
            value: location,
          }))}
      />

      <RNPickerSelect
        value={selectedLocation2}
        onValueChange={(itemValue) =>
          handleLocation2Change(itemValue, setSelectedLocation2)
        }
        items={data
          .find((item) => item.day === selectedDay)
          .locations.map((location) => ({
            label: location.name,
            value: location,
          }))}
      />

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{
            flex: 1,
            padding: 16,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            marginHorizontal: 8,
            backgroundColor: "#C43042",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 8,
              color: "#fff",
            }}
          >
            {selectedLocation1.name}
          </Text>
          {selectedLocation1.sold.map((beer) => {
            return (
              <View style={{ paddingBottom: 20 }} key={uuid.v4()}>
                <Text
                  style={{
                    color: "#fff",
                  }}
                >
                  Brand Name:{" "}
                  <Text
                    style={{
                      color: "#333",
                    }}
                  >
                    {beer.name}
                  </Text>
                </Text>
                <Text
                  style={{
                    color: "#fff",
                  }}
                >
                  Sold:{" "}
                  <Text
                    style={{
                      color: "#333",
                    }}
                  >
                    {beer.sold}
                  </Text>
                </Text>
                <Text
                  style={{
                    color: "#fff",
                  }}
                >
                  Efficiency:{" "}
                  <Text
                    style={{
                      color: "#333",
                    }}
                  >
                    {beer.efficiency}
                  </Text>
                </Text>
                <Text
                  style={{
                    color: "#fff",
                  }}
                >
                  Quality:{" "}
                  <Text
                    style={{
                      color: "#333",
                    }}
                  >
                    {beer.quality}
                  </Text>
                </Text>
              </View>
            );
          })}
        </View>

        <View
          style={{
            flex: 1,
            padding: 16,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            marginHorizontal: 8,
            backgroundColor: "#C43042",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 8,
              color: "#fff",
            }}
          >
            {selectedLocation2.name}
          </Text>
          {selectedLocation2.sold.map((beer) => {
            return (
              <View style={{ paddingBottom: 20 }} key={uuid.v4()}>
                <Text
                  style={{
                    color: "#fff",
                  }}
                >
                  Brand Name:{" "}
                  <Text
                    style={{
                      color: "#333",
                    }}
                  >
                    {beer.name}
                  </Text>
                </Text>
                <Text
                  style={{
                    color: "#fff",
                  }}
                >
                  Sold:{" "}
                  <Text
                    style={{
                      color: "#333",
                    }}
                  >
                    {beer.sold}
                  </Text>
                </Text>
                <Text
                  style={{
                    color: "#fff",
                  }}
                >
                  Efficiency:{" "}
                  <Text
                    style={{
                      color: "#333",
                    }}
                  >
                    {beer.efficiency}
                  </Text>
                </Text>
                <Text
                  style={{
                    color: "#fff",
                  }}
                >
                  Quality:{" "}
                  <Text
                    style={{
                      color: "#333",
                    }}
                  >
                    {beer.quality}
                  </Text>
                </Text>
              </View>
            );
          })}
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity
          style={{
            marginTop: 10,
            backgroundColor: "#C43042",
            padding: 5,
            borderRadius: 5,
            width: 100,
            flexDirection: "row",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("TopByDate")}
        >
          <Text
            style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}
          >
            Top 5 Best-seller
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
