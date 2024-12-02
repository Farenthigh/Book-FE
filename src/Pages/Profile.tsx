import React, { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import close from "../assets/close.png";
import logopurple from "../assets/logopurple.png";

const UserProfile = () => {
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    const [addressInfo, setAddressInfo] = useState({
        name: "",
        address: "",
        subdistrict: "",
        district: "",
        province: "",
        postalCode: "",
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleInputChange = (e, section) => {
        const { name, value } = e.target;
        if (section === "userInfo") {
            setUserInfo({ ...userInfo, [name]: value });
        } else if (section === "addressInfo") {
            setAddressInfo({ ...addressInfo, [name]: value });
        }
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
        if (isEditing) {
            console.log("Saved User Info:", userInfo);
            console.log("Saved Address Info:", addressInfo);
            alert("Your profile has been updated!");
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-[#f9f9ff] px-32 py-10">
            <div className="w-full bg-white shadow-lg rounded-lg">
                <div className="flex justify-end p-5">
                    <img src={close} alt="close" />
                </div>
                <div className="p-10 flex justify-center">
                    <img src={logopurple} alt="logopurple" />
                </div>
                
                <h1 className="text-4xl font-cherry text-center">User Profile</h1>
                <div className="p-20">
                {/* My Account Section */}
                <div className="mb-8">
                    <div className="flex justify-between">
                    <h2 className="text-2xl font-serif mb-4">My Account</h2>
                    <button
                        onClick={toggleEdit}
                    >
                        {isEditing ? " ": <FaUserEdit size={20}/>}
                    </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {Object.keys(userInfo).map((key) => (
                            <div key={key}>
                                <label className="block text-gray-700 capitalize ml-5" htmlFor={key}>
                                    {key.replace(/([A-Z])/g, " $1")}
                                </label>
                                <input
                                    type="text"
                                    id={key}
                                    name={key}
                                    value={userInfo[key]}
                                    onChange={(e) => handleInputChange(e, "userInfo")}
                                    disabled={!isEditing}
                                    className={`w-full px-4 py-2 border rounded ${isEditing
                                        ? "rounded-full p-2 w-full pl-5  border-2 border-primary focus:outline-none"
                                        : "rounded-full p-2 w-full pl-5 bg-primarycontainer border-2 border-gray-200 focus:outline-none"
                                        }`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Shipping Address Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Shipping Address</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {Object.keys(addressInfo).map((key) => (
                            <div key={key}>
                                <label className="block text-gray-700 capitalize ml-5" htmlFor={key}>
                                    {key.replace(/([A-Z])/g, " $1")}
                                </label>
                                <input
                                    type="text"
                                    id={key}
                                    name={key}
                                    value={addressInfo[key]}
                                    onChange={(e) => handleInputChange(e, "addressInfo")}
                                    disabled={!isEditing}
                                    className={`w-full px-4 py-2 border rounded ${isEditing
                                        ? "rounded-full p-2 w-full pl-5  border-2 border-primary focus:outline-none"
                                        : "rounded-full p-2 w-full pl-5 bg-primarycontainer border-2 border-gray-200 focus:outline-none"
                                        }`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Edit/Save Button */}
                <div className="flex justify-center">
                    <button
                        onClick={toggleEdit}
                        className={`px-6 py-3 font-semibold text-lg rounded ${isEditing
                            ? "rounded-full text-xl w-36 bg-available text-white hover:bg-green-600"
                            : ""
                            }`}
                    >
                        {isEditing ? "Save" : " "}
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
