import React, { useState } from "react";

function AddPost() {
    const [postType, setPostType] = useState("sell"); // "sell" หรือ "rent"
    const [bookData, setBookData] = useState({
        title: "",
        author: "",
        publisher: "",
        category: "",
        description: "",
        condition: "", // ใช้เฉพาะสำหรับการขาย
        price: "", // ราคาสำหรับขาย
        rentPrices: { // ราคาสำหรับเช่า
            fiveDays: "",
            sevenDays: "",
            fourteenDays: "",
        },
        contact: {
            phone: "",
            lineID: "",
        },
        images: [], // เก็บไฟล์รูป
    });

    // ฟังก์ชันจัดการการเปลี่ยนแปลงค่าในฟอร์ม
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // ฟังก์ชันจัดการการเปลี่ยนค่าในราคาการเช่า
    const handleRentChange = (e) => {
        const { name, value } = e.target;
        setBookData((prev) => ({
            ...prev,
            rentPrices: {
                ...prev.rentPrices,
                [name]: value,
            },
        }));
    };

    // ฟังก์ชันจัดการการแนบรูป
    const handleImageUpload = (e) => {
        setBookData((prev) => ({
            ...prev,
            images: Array.from(e.target.files), // เก็บรูปในรูปแบบ Array
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Book data submitted:", bookData);
        alert("Book posted successfully!");
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-2xl font-bold text-center mb-6">Add Book</h1>

                <form onSubmit={handleSubmit}>
                    {/* ข้อมูลหนังสือ */}
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4">Book Details</h2>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <input
                                type="text"
                                name="title"
                                value={bookData.title}
                                onChange={handleChange}
                                placeholder="Title"
                                className="input-field"
                            />
                            <input
                                type="text"
                                name="author"
                                value={bookData.author}
                                onChange={handleChange}
                                placeholder="Author"
                                className="input-field"
                            />
                            <input
                                type="text"
                                name="publisher"
                                value={bookData.publisher}
                                onChange={handleChange}
                                placeholder="Publisher"
                                className="input-field"
                            />
                            <input
                                type="text"
                                name="category"
                                value={bookData.category}
                                onChange={handleChange}
                                placeholder="Category"
                                className="input-field"
                            />
                        </div>
                        <textarea
                            name="description"
                            value={bookData.description}
                            onChange={handleChange}
                            placeholder="Description"
                            className="input-field mt-4 h-24"
                        />
                    </section>

                    {/* แนบรูป */}
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4">Upload Images</h2>
                        <input
                            type="file"
                            multiple
                            onChange={handleImageUpload}
                            className="block w-full text-sm text-gray-500
                         file:mr-4 file:py-2 file:px-4
                         file:rounded-full file:border-0
                         file:text-sm file:font-semibold
                         file:bg-indigo-50 file:text-indigo-700
                         hover:file:bg-indigo-100"
                        />
                    </section>

                    {/* ประเภทโพสต์ */}
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4">Post Type</h2>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    value="sell"
                                    checked={postType === "sell"}
                                    onChange={() => setPostType("sell")}
                                />
                                Sell
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    value="rent"
                                    checked={postType === "rent"}
                                    onChange={() => setPostType("rent")}
                                />
                                Rent
                            </label>
                        </div>
                    </section>

                    {/* ข้อมูลเพิ่มเติมตามประเภทโพสต์ */}
                    {postType === "sell" && (
                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">Sell Details</h2>
                            <input
                                type="text"
                                name="condition"
                                value={bookData.condition}
                                onChange={handleChange}
                                placeholder="Condition (e.g., Good, Like New)"
                                className="input-field"
                            />
                            <input
                                type="number"
                                name="price"
                                value={bookData.price}
                                onChange={handleChange}
                                placeholder="Price"
                                className="input-field mt-4"
                            />
                        </section>
                    )}

                    {postType === "rent" && (
                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">Rent Details</h2>
                            <div className="grid gap-4 sm:grid-cols-3">
                                <input
                                    type="number"
                                    name="fiveDays"
                                    value={bookData.rentPrices.fiveDays}
                                    onChange={handleRentChange}
                                    placeholder="5 Days Price"
                                    className="input-field"
                                />
                                <input
                                    type="number"
                                    name="sevenDays"
                                    value={bookData.rentPrices.sevenDays}
                                    onChange={handleRentChange}
                                    placeholder="7 Days Price"
                                    className="input-field"
                                />
                                <input
                                    type="number"
                                    name="fourteenDays"
                                    value={bookData.rentPrices.fourteenDays}
                                    onChange={handleRentChange}
                                    placeholder="14 Days Price"
                                    className="input-field"
                                />
                            </div>
                        </section>
                    )}

                    {/* ข้อมูลการติดต่อ */}
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <input
                                type="text"
                                name="phone"
                                value={bookData.contact.phone}
                                onChange={(e) =>
                                    setBookData((prev) => ({
                                        ...prev,
                                        contact: { ...prev.contact, phone: e.target.value },
                                    }))
                                }
                                placeholder="Phone Number"
                                className="input-field"
                            />
                            <input
                                type="text"
                                name="lineID"
                                value={bookData.contact.lineID}
                                onChange={(e) =>
                                    setBookData((prev) => ({
                                        ...prev,
                                        contact: { ...prev.contact, lineID: e.target.value },
                                    }))
                                }
                                placeholder="Line ID"
                                className="input-field"
                            />
                        </div>
                    </section>

                    {/* ปุ่ม Submit */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-6 py-3 bg-indigo-500 text-white font-medium text-lg rounded hover:bg-indigo-600"
                        >
                            Post Book
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddPost;