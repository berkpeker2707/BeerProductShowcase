import React from "react";
import { View, Text } from "react-native";
import uuid from "react-native-uuid";
import RNPickerSelect from "react-native-picker-select";

import handleDayChange from "../helpers/handleDayChange";

const TopByDateScreen = (props) => {
  const {
    data,
    selectedDay,
    setSelectedDay,
    setSelectedLocation1,
    setSelectedLocation2,
  } = props;

  const selectedData = data.find((item) => item.day === selectedDay);

  const sortedBeers = selectedData.locations
    .flatMap((location) => location.sold)
    .sort((a, b) => b.sold - a.sold)
    .slice(0, 5);

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#fff" }}>
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
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 16,
          color: "#C43042",
        }}
      >
        Top 5 Best-Selling Beer Brands
      </Text>

      {sortedBeers.map((beer) => (
        <View
          style={{
            flex: 1,
            padding: 16,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            marginHorizontal: 8,
            paddingBottom: 20,
            backgroundColor: "#C43042",
          }}
          key={uuid.v4()}
        >
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
      ))}
    </View>
  );
};

export default TopByDateScreen;
