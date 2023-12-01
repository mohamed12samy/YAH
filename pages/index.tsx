import { useState } from "react";
import CalibrationCertificate from "./CalibrationCertificate";
export default function Home() {
  const [selected, setSelected] = useState("CalibrationCertificate");
  return (
    <main className="flex-col justify-center items-center">
        <CalibrationCertificate />
    </main>
  );
}
