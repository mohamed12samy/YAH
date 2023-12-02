import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

// Create styles

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: "column",
  },
  logo: {
    width: 74,
    height: 66,
    marginLeft: "auto",
    marginRight: "auto",
  },
  invoiceNoContainer: {
    flexDirection: "row",
    marginTop: 36,
    justifyContent: "flex-end",
  },
  invoiceDateContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  invoiceDate: {
    fontSize: 12,
    fontStyle: "bold",
  },
  label: {
    width: 60,
  },
});

// Create Document Component
export const PDFDocument = (props)=>{
    const {yah, ref} = props;
    
    return (
      <div size="A4" style={styles.page} ref={ref}>
        
        <div>
        <div style={styles.invoiceNoContainer}>
          <p style={styles.label}>Invoice No:</p>
          <p style={styles.invoiceDate}>{"NO."}</p>
        </div>
        <div style={styles.invoiceDateContainer}>
          <p style={styles.label}>Date: </p>
          <p>{"Date"}</p>
        </div>
      </div>
        
       
      </div>







      //   <Document> 
      //   <Page size="A4" style={styles.container}> 
      //     <View style={styles.header}> 
      //       <Text style={styles.logo}>YAH</Text> 
      //       <Text style={styles.title}>aasasas</Text> 

      //     </View> 
      //     {/* <View style={styles.definition}> 
      //       <Text >mo2asaset wa2t el ta7lya lel tegara</Text> 
      //       <Text >el ra2m el dareeby: 301053363100003</Text> 
      //       <Text>Roshn front</Text> 
      //       <Text>Start up hub</Text> 
      //       <Text>Riyadh, 13326</Text> 
      //     </View>  */}
      //     <View style={styles.definition}> 
      //       <Text >customer name: {yah.customerName}</Text> 
      //       <Text >product name: {yah.productName}</Text> 
      //       <Text >price: {yah.price}</Text> 
      //       <Text >quantity: {yah.quantity}</Text> 
      //       <Text >billing type: {yah.billType}</Text> 
      //       <Text >total Price: {yah.price * yah.quantity}</Text> 
      //       <Text >date: {yah.date}</Text> 
      //     </View> 

         
      //     <View style={styles.table}> 
      //       <View style={styles.tableRow}> 
      //       <Text style={styles.tableCell}>Start</Text> 
      //       <Text style={styles.tableCell}>End</Text> 
      //       <Text style={styles.tableCell}>Total</Text> 
      //     </View> 
      //     <View> 
      //       <Text style={styles.tableCell}>28/11/2021</Text> 
      //       <Text style={styles.tableCell}>30/11/2021</Text> 
      //       <Text style={styles.tableCell}>149.99 SAR</Text> 
      //     </View> 
      //     </View> 
      //     <View style={styles.footer}> 
      //       <Text style={styles.total}>Total: 149.99 SAR</Text> 
      //       <Text>YAH{'\n'}Riyadh 12333{'\n'}Saudi Arabia</Text> 
      //     </View> 
      //   </Page> 
      // </Document>
)};