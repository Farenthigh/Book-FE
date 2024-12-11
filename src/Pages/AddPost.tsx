import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import close from "../assets/close.png";
import { axiosInstance } from "../helper/axiosInstance";

function AddPost() {
  const navigate = useNavigate(); // ใช้สำหรับการนำทางกลับ
  const [postType, setPostType] = useState<"sale" | "rent">("sale"); // "sell" หรือ "rent"
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    publisher: "",
    category: "",
    description: "",
    type: postType,
    Condition: "", // ใช้เฉพาะสำหรับการขาย
    price: "", // ราคาสำหรับขาย
    rentPrices: {
      // ราคาสำหรับเช่า
      fivedayprice: "",
      sevendayprice: "",
      fourteendayprice: "",
    },
    phoneNumber: "",
    lineID: "",
    images: [], // เก็บไฟล์รูป
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/book/add", {
        title: bookData.title,
        author: bookData.author,
        publisher: bookData.publisher,
        category: bookData.category,
        description: bookData.description,
        type: postType,
        Condition: bookData.Condition,
        price: bookData.price,
        stock_quantity: "1",
        fivedayprice: bookData.rentPrices.fivedayprice,
        sevendayprice: bookData.rentPrices.sevendayprice,
        fourteendayprice: bookData.rentPrices.fourteendayprice,
        phoneNumber: bookData.phoneNumber,
        lineID: bookData.lineID,
      });
      console.log(response);
      if (response.status === 200) {
        alert("Book posted successfully!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ฟังก์ชันจัดการการเปลี่ยนแปลงค่าในฟอร์ม
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(bookData);
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Book data submitted:", bookData);
  //   alert("Book posted successfully!");
  //};

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#f9f9ff] px-32 py-10">
      <div className="w-full bg-white shadow-lg rounded-lg p-20">
        <div className="flex justify-end p-5">
          <img
            src={close}
            alt="close"
            className="cursor-pointer"
            onClick={handleClose} // เพิ่มการเรียก handleClose
          />
        </div>
        <h1 className="text-4xl font-cherry text-center mb-6">Add Post</h1>

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
                className="rounded-full p-2 w-full pl-5  border-2 border-primary focus:outline-none"
              />
              <input
                type="text"
                name="author"
                value={bookData.author}
                onChange={handleChange}
                placeholder="Author"
                className="rounded-full p-2 w-full pl-5  border-2 border-primary focus:outline-none"
              />
              <input
                type="text"
                name="publisher"
                value={bookData.publisher}
                onChange={handleChange}
                placeholder="Publisher"
                className="rounded-full p-2 w-full pl-5  border-2 border-primary focus:outline-none"
              />
              <select
                name="category"
                value={bookData.category}
                onChange={handleChange}
                className="rounded-full p-2 w-full pl-5 border-2 border-primary focus:outline-none"
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
          <section className="mb-5">
            <h2 className="text-xl font-serif mb-4">Post Type</h2>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  className="accent-purple-700"
                  value="sale"
                  checked={postType === "sale"}
                  onChange={() => setPostType("sale")}
                  // onChange={() => setPostType("rent")}
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
                  // onChange={() => setPostType("sale")}
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
                name="Condition"
                value={bookData.Condition}
                onChange={handleChange}
                className="rounded-full p-2 w-full pl-5  border-2 border-primary focus:outline-none mb-4"
              >
                <option value="new">new</option>
                <option value="like New">like New</option>
                <option value="good">good</option>
                <option value="acceptable">acceptable</option>
              </select>
              <input
                type="number"
                name="price"
                value={bookData.price}
                onChange={handleChange}
                placeholder="Price"
                className="rounded-full p-2 w-full pl-5  border-2 border-primary focus:outline-none"
              />
            </section>
          )}

          {postType === "rent" && (
            <section className="mb-8">
              <h2 className="ml-5 text-lg font-serif mb-4">Rent Details</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                <input
                  type="number"
                  name="fivedayprice"
                  value={bookData.rentPrices.fivedayprice}
                  onChange={handleRentChange}
                  placeholder="5 Days Price"
                  className="rounded-full p-2 w-full pl-5  border-2 border-primary focus:outline-none"
                />
                <input
                  type="number"
                  name="sevendayprice"
                  value={bookData.rentPrices.sevendayprice}
                  onChange={handleRentChange}
                  placeholder="7 Days Price"
                  className="rounded-full p-2 w-full pl-5  border-2 border-primary focus:outline-none"
                />
                <input
                  type="number"
                  name="fourteendayprice"
                  value={bookData.rentPrices.fourteendayprice}
                  onChange={handleRentChange}
                  placeholder="14 Days Price"
                  className="rounded-full p-2 w-full pl-5  border-2 border-primary focus:outline-none"
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
                value={bookData.phoneNumber}
                onChange={handleChange}
                // onChange={(e) =>
                //   setBookData((prev) => ({
                //     ...prev,
                //     contact: { ...prev.contact, phoneNumber: e.target.value },
                //   }))
                // }
                placeholder="Phone Number"
                className="rounded-full p-2 w-full pl-5  border-2 border-primary focus:outline-none"
              />
              <input
                type="text"
                name="lineID"
                value={bookData.lineID}
                onChange={handleChange}
                // onChange={(e) =>
                //   setBookData((prev) => ({
                //     ...prev,
                //     contact: { ...prev.contact, lineID: e.target.value },
                //   }))
                // }
                placeholder="Line ID"
                className="rounded-full p-2 w-full pl-5  border-2 border-primary focus:outline-none"
              />
            </div>
          </section>

          {/* ปุ่ม Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white font-serif font-bold text-xl rounded-full hover:bg-purple-700"
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
