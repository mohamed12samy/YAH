import { useState, useRef } from "react";
import jsPDF from "jspdf";
import "../assets/fonts/Amiri.js";
import autoTable from "jspdf-autotable";

const CalibrationCertificate = () => {
  const [customerName, setCustomerName] = useState("");
  const [billType, setBillType] = useState("فاتورة مشتريات");
  const [billNumber, setBillNumber] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");
  const ref = useRef();

  const loadImage = (url) => {
    return new Promise((resolve) => {
      const c = document.createElement("canvas");
      const ctx = c.getContext("2d");

      const i = new Image();
      i.onload = () => {
        c.width = i.width;
        c.height = i.height;

        if (ctx) {
          ctx.drawImage(i, 0, 0);
        }

        resolve(c.toDataURL("image/png"));
      };

      i.src = url;
    });
  };

  const generatePDF = async () => {
    const doc = new jsPDF();
    // set the font to Amiri
    doc.setFont("Amiri-Regular");
    doc.setFontSize(30);
    await loadImage("/Logo.jpeg").then((img) => {
      doc.addImage(img, "jpeg", 30, 20, 50, 50);
    });
    //doc.text("YAH", 30, 40, { align: "left" }); // align the text to the right
    doc.text(`${billType}`, 135, 60, { align: "right" }); // align the text to the right
    doc.setFontSize(20);
    doc.text(` :فاتورة الى`, 200, 70, { align: "right" }); // align the text to the right
    doc.setFontSize(15);
    doc.text(`${customerName} `, 200, 80, { align: "right" }); // align the text to the right

    doc.setFontSize(20);
    doc.text("رقم الفاتورة  ", 70, 70, { align: "right" }); // align the text to the right
    doc.setFontSize(15);
    doc.text(`${billNumber}`, 33, 70, {
      align: "right",
    });
    doc.setFontSize(20);
    doc.text("تاريخ الفاتورة   ", 70, 80, { align: "right" }); // align the text to the right
    doc.setFontSize(15);
    doc.text(new Date(date).toISOString().slice(0, 10), 33, 80, {
      align: "right",
    }); // align the text to the right

    const margin = 0.5; // inches on a 8.5 x 11 inch sheet.
    const verticalOffset = margin;
    var columns = [
      { title: "اسم المنتج", dataKey: "col1" },
      { title: "السعر", dataKey: "col2" },
      { title: "العدد", dataKey: "col3" },
      { title: "المجموع", dataKey: "col4" },
    ];
    var rows = [
      {
        col1: productName,
        col2: price,
        col3: quantity,
        col4: quantity * price,
      },
    ];

    autoTable(doc, {
      head: [["المجموع ", "العدد", "السعر", "اسم المنتج"]],
      body: [[quantity * price, quantity, price, productName]],
      startY: 100,
      styles: {
        overflow: "linebreak",
        fontSize: 12,
        font: "Amiri-Regular",
        lineColor: "black",
        lineWidth: 1,
      },
      bodyStyles: {
        halign: "right",
        fillColor: [255, 255, 255],
        fontSize: 20,
        textColor: "black",
        lineColor: "black",
        lineWidth: 1,
      },
      headStyles: {
        halign: "right",
        fillColor: [201, 203, 207],
        fontSize: 18,
        textColor: "black",
        lineColor: "black",
        lineWidth: 1,
      },
    });
    doc.setFontSize(20);
    doc.text("مدير المبيعات", 200, 150, { align: "right" }); // align the text to the right
    doc.setFontSize(15);
    doc.text(`عبد المحسن بن عبد الرحمن`, 200, 160, { align: "right" }); // align the text to the right
    doc.save("a4.pdf"); // save the document as a file

    // doc.html(ref.current, {
    //   async callback(docc) {

    //     const arabic = 'مرحبا';
    //     const arabicWithDiacritics = 'مَرْحَبًا';
    //     docc.setFont('Amiri-Regular');
    //     docc.setFontSize(40);

    //     docc.text(arabic, 200, 40, { align: 'right' }); // align the text to the right
    //     docc.text(arabicWithDiacritics, 200, 80, { align: 'right' });
    //     docc.save("pdf_name.pdf");
    //   }
    // });
  };
  // const styles = StyleSheet.create({
  //   page: {
  //     fontFamily: "Helvetica",
  //     fontSize: 11,
  //     paddingTop: 30,
  //     paddingLeft: 60,
  //     paddingRight: 60,
  //     lineHeight: 1.5,
  //     flexDirection: "column",
  //   },
  //   logo: {
  //     width: 74,
  //     height: 66,
  //     marginLeft: "auto",
  //     marginRight: "auto",
  //   },
  //   invoiceNoContainer: {
  //     flexDirection: "row",
  //     marginTop: 36,
  //     justifyContent: "flex-end",
  //   },
  //   invoiceDateContainer: {
  //     flexDirection: "row",
  //     justifyContent: "flex-end",
  //   },
  //   invoiceDate: {
  //     fontSize: 12,
  //     fontStyle: "bold",
  //   },
  //   label: {
  //     width: 60,
  //   },
  // });

  return (
    <div className="">
      <main className="flex justify-center items-center">
        <div className="leading-loose">
          <form className="max-w-xl m-4 p-10 bg-white rounded shadow-xl text-lg">
            <p className="text-gray-800 font-medium text-center">
              ناشر لتدفئةو التبريد
            </p>

            <div className="mt-2">
              <label
                className="block text-sm text-gray-00 text-right"
                htmlFor="Customer Name"
              >
                اسم العميل
              </label>
              <input
                className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded text-right"
                id="Customer Name"
                name="Customer Name"
                type="text"
                autoComplete="off"
                onChange={(e) => setCustomerName(e.target.value)}
                required
                placeholder="اسم العميل"
                aria-label="Customer Name"
              />
            </div>
            <div className="mt-2">
              <label
                className="block text-sm text-gray-00 text-right"
                htmlFor="Product Name"
              >
                اسم المنتج
              </label>
              <input
                className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded text-right"
                id="Product Name"
                name="Product Name"
                type="text"
                autoComplete="off"
                onChange={(e) => setProductName(e.target.value)}
                required
                placeholder="اسم المنتج"
                aria-label="Product Name"
              />
            </div>
            <div className="mt-2">
              <label
                className="block text-sm text-gray-00 text-right"
                htmlFor="W.O.No."
              >
                نوع الفاتورة
              </label>

              <div className="relative">
                <select
                  className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded text-right"
                  id="grid-state"
                  value={billType}
                  onChange={(e) => setBillType(e.target.value)}
                  defaultValue={"فاتورة مشتريات"}
                >
                  <option value={"فاتورة مشتريات"}>فاتورة مشتريات </option>
                  <option value={"عرض اسعار"}>عرض اسعار</option>
                </select>
                <div className="pointer-events-none absolute left-96 pl-20 bottom-4 pin-y pin-r flex items-center px-2 text-grey-darker text-right">
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
                className="block text-sm text-gray-00 text-right"
                htmlFor="Price"
              >
                السعر
              </label>
              <input
                className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded text-right"
                id="Price"
                name="Price"
                type="number"
                autoComplete="off"
                onChange={(e) => setPrice(e.target.value)}
                required
                placeholder="السعر"
                aria-label="Price"
              />
            </div>
            <div className="mt-2">
              <label
                className="block text-sm text-gray-00 text-right"
                htmlFor="Quantity"
              >
                العدد
              </label>
              <input
                className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded text-right"
                id="Quantity"
                name="Quantity"
                type="number"
                autoComplete="off"
                onChange={(e) => setQuantity(e.target.value)}
                required
                placeholder="العدد"
                aria-label="Quantity"
              />
            </div>
            <div className="mt-2">
              <label
                className="block text-sm text-gray-00 text-right"
                htmlFor="Price"
              >
                رقم الفاتورة
              </label>
              <input
                className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded text-right"
                id="billNumer"
                name="Price"
                type="number"
                autoComplete="off"
                onChange={(e) => setBillNumber(e.target.value)}
                required
                placeholder="رقم الفاتورة"
                aria-label="Price"
              />
            </div>
            <div className="mt-2">
              <label
                className="block text-sm text-gray-00 text-right"
                htmlFor="date"
              >
                التاريخ
              </label>
              <input
                className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded text-right"
                id="Date"
                name="Date"
                type="date"
                autoComplete="off"
                onChange={(e) => setDate(e.target.value)}
                required
                placeholder="التاريخ"
                aria-label="Date"
              />
            </div>

            <div className="mt-4">
              <button
                className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded text-right"
                type="button"
                onClick={() => {
                  generatePDF();
                }}
              >
                استخرج الفاتورة
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CalibrationCertificate;
