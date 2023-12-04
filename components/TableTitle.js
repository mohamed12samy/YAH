import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    marginTop: 24,
  },
  reportTitle: {
    color: "black",
    letterSpacing: 4,
    fontSize: 25,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

const TableTitle = () => (
  <View style={styles.titleContainer}>
    <Text style={styles.reportTitle}>YAH</Text>
  </View>
);

export default TableTitle;
