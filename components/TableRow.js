import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "black";
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#bff0fd",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    fontStyle: "bold",
  },
  description: {
    width: "15%",
    textAlign: "left",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
  },
  qty: {
    width: "10%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
  },
  rate: {
    width: "60%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
  },
  amount: {
    width: "15%",
    textAlign: "right",
    paddingRight: 8,
  },
});

const TableRow = () => {
  const rows = [1].map((item) => (
    <View style={styles.row} key={item}>
      <Text style={styles.description}>الكمية</Text>
      <Text style={styles.qty}>سعر الوحدة</Text>
      <Text style={styles.rate}>وصف</Text>
      <Text style={styles.amount}>ضيافة</Text>
    </View>
  ));
  return <Fragment>{rows}</Fragment>;
};

export default TableRow;
