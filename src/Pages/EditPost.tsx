import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {ALLPOST_ROUTE} from "../context/Route"

function EditPost() {
  const { bookId } = useParams();
  const [bookData, setBookData] = useState(null);
  const [postType, setPostType] = useState("sell"); // "sell" หรือ "rent"

  // จำลองการดึงข้อมูลจาก API (สมมติ bookId ใช้ดึงข้อมูลหนังสือ)
  useEffect(() => {
    // Fetch data from backend (mock example)
    const fetchBookData = async () => {
      const mockData = {
        title: "Example Book",
        author: "John Doe",
        publisher: "BookHouse",
        category: "Fiction",
        description: "An exciting fiction novel.",
        condition: "Good",
        price: "250",
        rentPrices: {
          fiveDays: "50",
          sevenDays: "70",
          fourteenDays: "100",
        },
        contact: {
          phone: "123456789",
          lineID: "exampleID",
        },
        postType: "sell", // หรือ "rent"
        images: [],
      };
      setBookData(mockData);
      setPostType(mockData.postType);
    };

    fetchBookData();
  }, [bookId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

  const handleImageUpload = (e) => {
    setBookData((prev) => ({
      ...prev,
      images: Array.from(e.target.files),
    }));
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    console.log("Updated Book Data:", bookData);
    alert("Post updated successfully!");
    // ส่งข้อมูลกลับไปยัง backend
  };

  if (!bookData) return <div>Loading...</div>;

    return (
        <div className="min-h-screen flex justify-center items-center bg-[#f9f9ff] px-32 py-10">
        <div className="w-full bg-white shadow-lg rounded-lg p-20">
            <h1 className="text-4xl font-cherry text-center mb-6">Edit Post</h1>

                <form onSubmit={handleSaveChanges}>
                    {/* ข้อมูลหนังสือ */}
                    <section className="mb-8">
                    <h2 className="text-xl font-serif mb-4">Book Details</h2>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <input
                                type="text"
                                name="title"
                                value={bookData.title}
                                onChange={handleChange}
                                placeholder="Title"
                                className="rounded-full p-2 w-full pl-5  border-2 border-primary focus:outline-none mb-4"
                            />
                            <input
                                type="text"
                                name="author"
                                value={bookData.author}
                                onChange={handleChange}
                                placeholder="Author"
                                className="rounded-full p-2 w-full pl-5  border-2 border-primary focus:outline-none mb-4"
                            />
                            <input
                                type="text"
                                name="publisher"
                                value={bookData.publisher}
                                onChange={handleChange}
                                placeholder="Publisher"
                                className="rounded-full p-2 w-full pl-5  border-2 border-primary focus:outline-none mb-4"
                            />
                            <input
                                type="text"
                                name="category"
                                value={bookData.category}
                                onChange={handleChange}
                                placeholder="Category"
                                className="rounded-full p-2 w-full pl-5  border-2 border-primary focus:outline-none mb-4"
                            />
                        </div>
                        <textarea
                            name="description"
                            value={bookData.description}
                            onChange={handleChange}
                            placeholder="Description"
                            className="mt-4 h-24 rounded-2xl p-2 w-full pl-5  border-2 border-primary focus:outline-none"
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
                         file:bg-primarycontainer file:text-primary
                         hover:file:bg-purple-300"
                        />
                    </section>

                    {/* ประเภทโพสต์ */}
                    <section className="mb-8">
                    <h2 className="text-xl font-serif mb-4">Post Type</h2>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    className="accent-purple-700"
                                    value="sell"
                                    checked={postType === "sell"}
                                    onChange={() => setPostType("sell")}
                                />
                                Sell
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    className="accent-purple-700"
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
                            <h2 className="ml-5 text-lg font-serif mb-4">Sell Details</h2>
                            <input
                                type="text"
                                name="condition"
                                value={bookData.condition}
                                onChange={handleChange}
                                placeholder="Condition"
                                className="rounded-full p-2 w-full pl-5  border-2 border-primary focus:outline-none mb-4"
                            />
                            <input
                                type="number"
                                name="price"
                                value={bookData.price}
                                onChange={handleChange}
                                placeholder="Price"
                                 className="rounded-full p-2 w-full pl-5  border-2 border-primary focus:outline-none mb-4"
                            />
                        </section>
                    )}

                    {postType === "rent" && (
                        <section className="mb-8">
                            <h2 className="ml-5 text-lg font-serif mb-4">Rent Details</h2>
                            <div className="grid gap-4 sm:grid-cols-3">
                                <input
                                    type="number"
                                    name="fiveDays"
                                    value={bookData.rentPrices.fiveDays}
                                    onChange={handleRentChange}
                                    placeholder="5 Days Price"
                                     className="rounded-full p-2 w-full pl-5  border-2 border-primary focus:outline-none mb-4"
                                />
                                <input
                                    type="number"
                                    name="sevenDays"
                                    value={bookData.rentPrices.sevenDays}
                                    onChange={handleRentChange}
                                    placeholder="7 Days Price"
                                     className="rounded-full p-2 w-full pl-5  border-2 border-primary focus:outline-none mb-4"
                                />
                                <input
                                    type="number"
                                    name="fourteenDays"
                                    value={bookData.rentPrices.fourteenDays}
                                    onChange={handleRentChange}
                                    placeholder="14 Days Price"
                                     className="rounded-full p-2 w-full pl-5  border-2 border-primary focus:outline-none mb-4"
                                />
                            </div>
                        </section>
                    )}

                    {/* ข้อมูลการติดต่อ */}
                    <section className="mb-8">
                        <h2 className="text-xl font-serif mb-4">Contact Information</h2>
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
                                className="rounded-full p-2 w-full pl-5  border-2 border-primary focus:outline-none mb-4"
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
                                className="rounded-full p-2 w-full pl-5  border-2 border-primary focus:outline-none mb-4"
                            />
                        </div>
                    </section>

                    {/* ปุ่ม Save และ Cancel */}
                    <div className="flex justify-between">
                        <Link
                            to={ALLPOST_ROUTE}
                            type="button"
                            onClick={() => alert("Cancel editing")}
                            className="px-6 py-3 bg-gray-300 text-gray-700 font-serif font-bold text-lg rounded-full hover:bg-gray-400"
                        >
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            className="px-6 py-3 bg-primary text-white font-serif font-bold text-xl rounded-full hover:bg-purple-700"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditPost;
