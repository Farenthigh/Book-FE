import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaCreditCard } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import PromptpayLogo from "../assets/thaiqr.png";

const QRPayment: React.FC = () => {
  const [showQR, setShowQR] = useState<boolean>(false);
  const [selectedPayment, setSelectedPayment] = useState<string>("");

  // ข้อมูล QR Code ที่จะแสดง (สามารถเปลี่ยนเป็นข้อมูลธุรกิจหรือ Payment ID)
  const qrData: string =
    "00020101021129370016A000000677010111021300665123456789012304000002TH53037646304";

  const [shippingInfo, setShippingInfo] = useState({
    name: "Antony Edward",
    address: "4564 Layman Avenue, Fayetteville, NC",
    mobile: "910-818-4705",
  });

  const [isEditable, setIsEditable] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-[#f9f9ff] text-gray-800 px-10 py-8 flex flex-col items-center">
      <header className="w-full max-w-screen-lg mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-700 hover:text-black"
        >
          <IoIosArrowBack className="mr-2 text-2xl" />
          <span className="text-xl font-cherry">Checkout</span>
        </button>
      </header>

      <main className="w-full max-w-screen-lg mt-10 ml-16">
        {/* ฟอร์มแก้ไข Shipping To */}
        <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-cherry mb-2">Shipping To</h3>
            <button
            onClick={() => setIsEditable(!isEditable)}
            className="text-OrangePrimary underline"
            >
            {isEditable ? "Save" : "Change"}
            </button> 
        </div>

        <div className="flex flex-col items-center">
            <input
            type="text"
            name="name"
            value={shippingInfo.name}
            onChange={handleChange}
            readOnly={!isEditable}
            className={`w-full mb-4 rounded-lg px-4 py-2 ${
                isEditable
                ? "bg-white text-black focus:outline-none"
                : "bg-gray-200 text-gray-400 focus:outline-none"
            }`}
            placeholder="Name"
            />
            <input
            type="text"
            name="address"
            value={shippingInfo.address}
            onChange={handleChange}
            readOnly={!isEditable}
            className={`w-full mb-4 rounded-lg px-4 py-2 ${
                isEditable
                ? "bg-white text-black focus:outline-none"
                : "bg-gray-200 text-gray-400 focus:outline-none"
            }`}
            placeholder="Address"
            />
            <input
            type="text"
            name="mobile"
            value={shippingInfo.mobile}
            onChange={handleChange}
            readOnly={!isEditable}
            className={`w-full rounded-lg px-4 py-2 ${
                isEditable
                ? "bg-white text-black focus:outline-none"
                : "bg-gray-200 text-gray-400 focus:outline-none"
            }`}
            placeholder="Phone Number"
            />
        </div>
        <div className="flex-grow border-t-2 h-0.5 border-purple-200 mt-10"></div>
        </main>

      <div className="flex justify-center gap-20 mt-10">
        <button
          onClick={() => {
            setShowQR(true);
            setSelectedPayment("QR");
          }}
          className={`flex items-center justify-between w-80 bg-white hover:bg-gray-100 text-black font-bold py-3 px-4 border rounded-lg shadow-lg focus:outline-none ${
            selectedPayment === "QR" 
          }`}
        >
          <img
            src={PromptpayLogo}
            alt="promptpaylogo"
            className="w-20 object-cover rounded-md"
          />
          <div className="text-center flex-grow font-cherry text-lg">
            QR Payment
          </div>
          <FaRegCheckCircle
            className={`text-2xl ${
              selectedPayment === "QR" ? "text-OrangePrimary" : "text-gray-400"
            }`}
          />
        </button>

        <button className="flex items-center justify-between w-80 bg-white hover:bg-gray-100 text-black font-bold py-3 px-4 border rounded-lg shadow-lg focus:outline-none">
          <FaCreditCard size={38} className="text-gray-700 ml-4" />
          <div className="text-center flex-grow font-cherry text-lg">
            Credit Card
          </div>
          <FaRegCheckCircle className="text-gray-400 text-2xl " />
        </button>
      </div>

      {/* แสดง QR Code เมื่อ showQR เป็น true */}
      {showQR && (
        <div className="mt-20 flex flex-col items-center">
          <h4 className="text-lg font-semibold mb-4">Scan QR Code</h4>
          <QRCodeSVG value={qrData} size={300} />
          <p className="mt-2 text-sm text-gray-500">PromptPay QR Payment</p>
        </div>
      )}
    </div>
  );
};

export default QRPayment;
