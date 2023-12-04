import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TableBlankSpace from "./TableBlankSpace";
import TableFooter from "./TableFooter";

const tableRowsCount = 3;

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 24,
    borderWidth: 1,
    borderColor: "#bff0fd",
  },
});

const TableItems = ({ invoice }) => (
  <View style={styles.tableContainer}>
    <TableHeader />
    <TableRow />
    <TableBlankSpace rowsCount={tableRowsCount} />
    <TableFooter />
  </View>
);

export default TableItems;
