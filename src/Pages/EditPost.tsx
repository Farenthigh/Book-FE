import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ALLPOST_ROUTE } from "../context/Route";
import { axiosInstance } from "../helper/axiosInstance";
import { uploadImage } from "../helper/supabase";

function EditPost() {
  const { bookId } = useParams();
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    publisher: "",
    category: "",
    description: "",
    type: "sale",
    Condition: "",
    price: "",
    status: "available",
    rentPrices: {
      fivedayprice: "",
      sevendayprice: "",
      fourteendayprice: "",
    },
    contact: {
      phoneNumber: "",
      lineID: "",
    },
    images: [], // เก็บไฟล์รูป
  });

  const [postType, setPostType] = useState<"sale" | "rent">("sale"); // "sell" หรือ "rent"
  const [bookStatus, setbookStatus] = useState<"available" | "rented">(
    "available"
  ); // "sell" หรือ "rent"

  // จำลองการดึงข้อมูลจาก API (สมมติ bookId ใช้ดึงข้อมูลหนังสือ)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const images = bookData.images.map(async (image) => {
        return await uploadImage("book", image);
      });
      const imageUrls = await Promise.all(images);
      const response = await axiosInstance.put(`/book/updatebook/${bookId}`, {
        title: bookData.title,
        author: bookData.author,
        publisher: bookData.publisher,
        category: bookData.category,
        description: bookData.description,
        bookimage: imageUrls,
        type: postType,
        Condition: bookData.Condition,
        price: bookData.price,
        status: bookStatus,
        fivedayprice: bookData.rentPrices.fivedayprice,
        sevendayprice: bookData.rentPrices.sevendayprice,
        fourteendayprice: bookData.rentPrices.fourteendayprice,
        phoneNumber: bookData.contact.phoneNumber,
        lineID: bookData.contact.lineID,
      });
      console.log(response);
      if (response.status === 200) {
        alert("Post updated successfully!");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
      images: Array.from(e.target.files), // เก็บรูปในรูปแบบ Array
    }));
  };

  //   const handleSaveChanges = async () => {
  //     // e.preventDefault();
  //     console.log("Updated Book Data:", bookData);
  //     alert("Post updated successfully!");
  //     // ส่งข้อมูลกลับไปยัง backend
  //   };
  useEffect(() => {
    console.log("Book Data:", bookData);
  }, [bookData]);
  useEffect(() => {
    console.log("Post Type:", postType);
    console.log("Book Status:", bookStatus);
  }, [postType, bookStatus]);

  if (!bookData) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#f9f9ff] px-32 py-10">
      <div className="w-full bg-white shadow-lg rounded-lg p-20">
        <h1 className="text-4xl font-cherry text-center mb-6">Edit Post</h1>

        <form onSubmit={handleSubmit}>
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
              <select
                name="category"
                value={bookData.category}
                onChange={handleChange}
                className="rounded-full p-2 w-full pl-5  border-2 border-primary focus:outline-none mb-4"
              >
                <option value="Manga">Manga</option>
                <option value="Psychology">Psychology</option>
                <option value="Education">Education</option>
                <option value="Fiction">Fiction</option>
                <option value="Novel">Novel</option>
                <option value="Literature">Literature</option>
              </select>
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
            <h2 className="text-xl font-serif mb-4">Upload Images</h2>
            <input
              type="file"
              accept="image/*"
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
                  value="sale"
                  checked={postType === "sale"}
                  onChange={() => setPostType("sale")}
                />
                sale
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  className="accent-purple-700"
                  value="rent"
                  checked={postType === "rent"}
                  onChange={() => setPostType("rent")}
                />
                rent
              </label>
            </div>
          </section>

          {/* ข้อมูลเพิ่มเติมตามประเภทโพสต์ */}
          {postType === "sale" && (
            <section className="mb-8">
              <h2 className="ml-5 text-lg font-serif mb-4">Sale Details</h2>
              <select
                name="condition"
                value={bookData.condition}
                onChange={handleChange}
                className="rounded-full p-2 w-full pl-5  border-2 border-primary focus:outline-none mb-4"
              >
                <option value="New">New</option>
                <option value="Like New">Like New</option>
                <option value="Good">Good</option>
                <option value="Acceptable">Acceptable</option>
              </select>
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
              <h2 className="ml-10 text-lg font-serif mb-2">Status</h2>
              <div className="flex gap-4 ml-10 mb-5">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    className={`accent-available ${bookStatus === "available"}`}
                    value="available"
                    checked={bookStatus === "available"}
                    onChange={() => setbookStatus("available")}
                  />
                  available
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    className={`accent-rented ${bookStatus === "rented"}`}
                    value="rented"
                    checked={bookStatus === "rented"}
                    onChange={() => setbookStatus("rented")}
                  />
                  rented
                </label>
              </div>

              <h2 className="ml-10 text-lg font-serif mb-4">Rent Details</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                <input
                  type="number"
                  name="fivedayprice"
                  value={bookData.rentPrices.fivedayprice}
                  onChange={handleRentChange}
                  placeholder="5 Days Price"
                  className="rounded-full p-2 w-full pl-5  border-2 border-primary focus:outline-none mb-4"
                />
                <input
                  type="number"
                  name="sevendayprice"
                  value={bookData.rentPrices.sevendayprice}
                  onChange={handleRentChange}
                  placeholder="7 Days Price"
                  className="rounded-full p-2 w-full pl-5  border-2 border-primary focus:outline-none mb-4"
                />
                <input
                  type="number"
                  name="fourteendayprice"
                  value={bookData.rentPrices.fourteendayprice}
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
                name="phoneNumber"
                // value={bookData.contact.phoneNumber}
                onChange={(e) =>
                  setBookData((prev) => ({
                    ...prev,
                    contact: { ...prev.contact, phoneNumber: e.target.value },
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
