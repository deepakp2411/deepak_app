import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
} from "react-native";

export default function List() {
  const [Items, setItems] = useState([
    { key: "1", item: "item 1" },
    { key: "2", item: "item 2" },
    { key: "3", item: "item 3" },
    { key: "4", item: "item 4" },
    { key: "5", item: "item 5" },
    { key: "6", item: "item 6" },
    { key: "7", item: "item 7" },
    { key: "8", item: "item 8" },
    { key: "9", item: "item 9" },
    { key: "10", item: "item 10" },
    { key: "11", item: "item 11" },
    { key: "12", item: "item 12" },
    { key: "13", item: "item 13" },
  ]);
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, { key: 56, item: "Deepak" }]);
    setRefreshing(false);
  };

  const DATA = [
    {
      title: "Title 1",
      data: ["Item 1-1", "Item 1-2", "Item 1-3"],
    },
    {
      title: "Title 2",
      data: ["Item 2-1", "Item 2-2", "Item 2-3"],
    },
    {
      title: "Title 3",
      data: ["Item 3-1", "Item 3-2", "Item 3-3"],
    },
    {
      title: "Title 4",
      data: ["Item 4-1", "Item 4-2", "Item 4-3"],
    },
  ];

  return (
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={DATA}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({ section }) => {
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>;
      }}
    />
    // <FlatList
    //   // horizontal
    //   keyExtractor={(item,index) =>index.toString()}
    //   data={Items}
    //   renderItem={({ item }) => (
    //     <View style={styles.item}>
    //       <Text style={styles.text}>{item.item}</Text>
    //     </View>
    //   )}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={Refreshing}
    //       onRefresh={onRefresh}
    //       colors={["#ff00ff"]}
    //     />
    //   }
    // />
    // <ScrollView
    //   style={styles.container}
    //   refreshControl={<RefreshControl refreshing={Refreshing} onRefresh={onRefresh} colors={['#ff00ff']} />}
    // >
    //   {Items.map((i) => {
    //     return (
    //       <View style={styles.item} key={i.key}>
    //         <Text style={styles.text}>{i.item}</Text>
    //       </View>
    //     );
    //   })}
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "azure",
  },
  item: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4ae1fa",
  },
  text: {
    fontSize: 30,
    margin: 10,
  },
});
