import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

// Create styles

const styles = StyleSheet.create({ 
    container: { 
     }, 
    header: { 
      display: 'flex', 
      justifyContent: 'space-between',
       marginBottom: 10, 
      padding:30,
      }, 
    logo: { 
      display: 'flex', 
      color:'black',
      fontWeight: 900,
      alignSelf:'left',
      fontSize:'50px',
      backgroundColor:'blue'
    },
    title: { 
      display: 'flex', 
      textAlign: 'right', 
      fontSize: 40, 
      fontWeight: 900, 
      backgroundColor:'yellow',
      alignSelf:'right',
    },
    table: { 
      width: '100%', 
      borderCollapse: 'collapse', }, 
    tableCell: { 
        border: '1px solid black', 
        padding: 10, 
        textAlign: 'center', }, 
    tableRow: { 
      backgroundColor: '#d9f2d9', }, 
    footer: { 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      marginTop: 20, }, 
    definition:{
      width:'100%',
      alignContent:'right',
      alignItems:'right',
      fontSize:20,
      padding:30
      },
    total: { fontSize: 18, fontWeight: 'bold', }, });
  

// Create Document Component
export const PDFDocument = (props)=>{
    const {yah} = props;
    console.log(yah.customerName
      )
    return (

        <Document> 
        <Page size="A4" style={styles.container}> 
          <View style={styles.header}> 
            <Text style={styles.logo}>YAH</Text> 
            <Text style={styles.title}>aasasas</Text> 

          </View> 
          {/* <View style={styles.definition}> 
            <Text >mo2asaset wa2t el ta7lya lel tegara</Text> 
            <Text >el ra2m el dareeby: 301053363100003</Text> 
            <Text>Roshn front</Text> 
            <Text>Start up hub</Text> 
            <Text>Riyadh, 13326</Text> 
          </View>  */}
          <View style={styles.definition}> 
            <Text >customer name: {yah.customerName}</Text> 
            <Text >product name: {yah.productName}</Text> 
            <Text >price: {yah.price}</Text> 
            <Text >quantity: {yah.quantity}</Text> 
            <Text >billing type: {yah.billType}</Text> 
            <Text >total Price: {yah.price * yah.quantity}</Text> 
            <Text >date: {yah.date}</Text> 
          </View> 

         
          <View style={styles.table}> 
            <View style={styles.tableRow}> 
            <Text style={styles.tableCell}>Start</Text> 
            <Text style={styles.tableCell}>End</Text> 
            <Text style={styles.tableCell}>Total</Text> 
          </View> 
          <View> 
            <Text style={styles.tableCell}>28/11/2021</Text> 
            <Text style={styles.tableCell}>30/11/2021</Text> 
            <Text style={styles.tableCell}>149.99 SAR</Text> 
          </View> 
          </View> 
          <View style={styles.footer}> 
            <Text style={styles.total}>Total: 149.99 SAR</Text> 
            <Text>YAH{'\n'}Riyadh 12333{'\n'}Saudi Arabia</Text> 
          </View> 
        </Page> 
      </Document>
)};