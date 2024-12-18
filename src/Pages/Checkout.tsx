import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6"
import PromptpayLogo from "../assets/thaiqr.png";


const QRPayment: React.FC = () => {
    const [showQR, setShowQR] = useState<boolean>(false);

    // ข้อมูล QR Code ที่จะแสดง (สามารถเปลี่ยนเป็นข้อมูลธุรกิจหรือ Payment ID)
    const qrData: string = "00020101021129370016A000000677010111021300665123456789012304000002TH53037646304";

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
        <div className="min-h-screen bg-[#f9f9ff] text-gray-800 px-24 py-8">
            <header className="flex items-center text-xl font-cherry mb-16 text-left">
                <button onClick={() => navigate(-1)} className="flex items-center text-gray-700 hover:text-black">
                    <IoIosArrowBack className="mr-2 text-2xl" />
                    <span>Checkout</span>
                </button>
            </header>
            <main className="flex flex-col max-w-screen-sm mx-auto mt-10 ml-10 p-4 bg-[#f9f9ff] rounded-lg">


                {/* ฟอร์มแก้ไข Shipping To */}
                <div className="mb-4 ">
                    <h3 className="text-xl font-cherry mb-4">Shipping To</h3>

                    <button
                        onClick={() => setIsEditable(!isEditable)}><span className="flex text-orange-500 underline ml-80">{isEditable ? "Save" : "Change"}</span></button>
                    <input
                        type="text"
                        name="name"
                        value={shippingInfo.name}
                        onChange={handleChange}
                        readOnly={!isEditable}
                        className={`w-full rounded px-2 ${isEditable
                                ? "bg-white text-black focus:outline-none mb-2"
                                : "bg-[#f9f9ff] text-gray-400 focus:outline-none"
                            }`}
                        placeholder="Name"
                    />
                    <input
                        type="text"
                        name="address"
                        value={shippingInfo.address}
                        onChange={handleChange}
                        readOnly={!isEditable}
                        className={`w-full rounded px-2 ${isEditable
                                ? "bg-white text-black focus:outline-none mb-2"
                                : "bg-[#f9f9ff] text-gray-400 focus:outline-none"
                            }`}
                        placeholder="Address"
                    />
                    <input
                        type="text"
                        name="mobile"
                        value={shippingInfo.mobile}
                        onChange={handleChange}
                        readOnly={!isEditable}
                        className={`w-full rounded px-2 ${isEditable
                                ? "bg-white text-black focus:outline-none mb-2"
                                : "bg-[#f9f9ff] text-gray-400 focus:outline-none"
                            }`}
                        placeholder="Phone Number"
                    />
                    <hr className="h-px my-5 bg-gray-300 border-0 dark:bg-gray-700" />

                </div>
            </main>

            <button
                onClick={() => setShowQR(!showQR)}
                className="flex w-80 max-h-md mx-auto bg-white  hover:bg-gray-100 text-black font-bold ml-14 py-2 px-4 border rounded-lg shadow-lg focus:outline-none"
            >
                {/* <main className="max-w-md mx-auto mt-10 ml-10 p-4 bg-white border rounded-lg shadow-lg"></main>   */}

                <img src={PromptpayLogo} alt="promptpaylogo" className="w-20 object-cover rounded-md mr-4 ml-5 justify-center" />
                <div>QR Payment</div>

            </button>

            {/* แสดง QR Code เมื่อ showQR เป็น true */}
            {showQR && (
                <div className="mt-6 flex flex-col ml-14 items-center">
                    <h4 className="text-lg font-semibold mb-2 text-center">Scan QR Code</h4>
                    <QRCodeSVG value={qrData} size={200} />
                    <p className="mt-2 text-sm text-gray-500">PromptPay QR Payment</p>
                </div>
            )}

        </div>
    );
};

export default QRPayment;
