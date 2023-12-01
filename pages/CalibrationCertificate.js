import { useEffect, useState } from "react";
import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";
import { useDispatch, useSelector } from "react-redux";
import { addToCalibrationForm } from "redux/mineSlicer";
 import {PDFDocument} from '../components/PDFComponent'
import { Document, Page, Text, View,Font, StyleSheet,Image, PDFDownloadLink} from '@react-pdf/renderer';

const CalibrationCertificate = () => {
   const [customerName, setCustomerName] = useState("");
  const [billType, setBillType] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  return (
    <div className="">
      <main className="flex justify-center items-center">
        <div className="leading-loose">
          <form
            className="max-w-xl m-4 p-10 bg-white rounded shadow-xl text-lg"
          
          >
            <p className="text-gray-800 font-medium text-center">
              YAH
            </p>
          
          
            <div className="mt-2">
              <label
                className="block text-sm text-gray-00"
                htmlFor="Customer Name"
              >
                Customer Name
              </label>
              <input
                className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                id="Customer Name"
                name="Customer Name"
                type="text"
                autoComplete="off"
                onChange={(e) => setCustomerName(e.target.value)}
                required
                placeholder="Customer Name"
                aria-label="Customer Name"
              />
            </div>
            <div className="mt-2">
              <label
                className="block text-sm text-gray-00"
                htmlFor="Product Name"
              >
                Product Name
              </label>
              <input
                className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                id="Product Name"
                name="Product Name"
                type="text"
                autoComplete="off"
                onChange={(e) => setProductName(e.target.value)}
                required
                placeholder="Product Name"
                aria-label="Product Name"
              />
            </div>
            <div className="mt-2">
              <label className="block text-sm text-gray-00" htmlFor="W.O.No.">
                Bill Type
              </label>
             
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                    id="grid-state"
                    value={billType}
                    onChange={(e) => setBillType(e.target.value)}
                    defaultValue={"purchaseInvoice"}
                  >
                    <option value={"purchaseInvoice"}>Purchase invoice </option>
                    <option value={"priceList"}>Price list</option>
                  </select>
                  <div className="pointer-events-none absolute left-96 pl-20 bottom-4 pin-y pin-r flex items-center px-2 text-grey-darker">
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
             
            </div>
            <div className="mt-2">
              <label
                className="block text-sm text-gray-00"
                htmlFor="Price"
              >
                Price
              </label>
              <input
                className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                id="Price"
                name="Price"
                type="text"
                autoComplete="off"
                onChange={(e) => setPrice(e.target.value)}
                required
                placeholder="Price"
                aria-label="Price"
              />
            </div>
            <div className="mt-2">
              <label
                className="block text-sm text-gray-00"
                htmlFor="Quantity"
              >
                Quantity
              </label>
              <input
                className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                id="Quantity"
                name="Quantity"
                type="text"
                autoComplete="off"
                onChange={(e) => setQuantity(e.target.value)}
                required
                placeholder="Quantity"
                aria-label="Quantity"
              />
            </div>
          
         
         
            <div className="mt-4">
              {/* <button
                className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                type="button"
              >
                <PDFDownloadLink document={<PDFDocument  yah={customerName}
                />} fileName={`YAHInvoice_${new Date().toLocaleDateString()}.pdf`}>
                  {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' : 'Export PDF'
                  }
              </PDFDownloadLink>
              </button> */}
              <PDFDownloadLink document={<PDFDocument yah={{customerName, productName, price, quantity, billType}}/>} 
                fileName={`YAHInvoice_${new Date().toLocaleDateString()}.pdf`}>
                  {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' : 'Export PDF'
                  }
              </PDFDownloadLink>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CalibrationCertificate;


