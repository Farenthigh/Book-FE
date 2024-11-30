import React, { useState } from "react";

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
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold mb-6 text-center">User Profile</h1>

                {/* My Account Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">My Account</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {Object.keys(userInfo).map((key) => (
                            <div key={key}>
                                <label className="block text-gray-700 mb-2 capitalize" htmlFor={key}>
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
                                        ? "focus:outline-none focus:ring focus:ring-indigo-300"
                                        : "bg-gray-200"
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
                                <label className="block text-gray-700 mb-2 capitalize" htmlFor={key}>
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
                                        ? "focus:outline-none focus:ring focus:ring-indigo-300"
                                        : "bg-gray-200"
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
                            ? "bg-green-500 text-white hover:bg-green-600"
                            : "bg-indigo-500 text-white hover:bg-indigo-600"
                            }`}
                    >
                        {isEditing ? "Save" : "Edit"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
