import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 36,
  },
  billTo: {
    marginTop: 20,
    paddingBottom: 3,
    fontFamily: "Helvetica-Oblique",
  },
});

const BillTo = ({ invoice }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.billTo}>Bill To:</Text>
    <Text>{"AHMED Mohamed"}</Text>
    <Text>{"AHMED Mohamed"}</Text>
    <Text>{"AHMED Mohamed"}</Text>
    <Text>{"AHMED Mohamed"}</Text>
  </View>
);

export default BillTo;
