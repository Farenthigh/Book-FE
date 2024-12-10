import { Link } from "react-router-dom";
import {EDITPOST_ROUTE} from "../context/Route";
import Book from "../components/Mockdata/Book.json";


const Post = () => {
  return (
    <>
        <div className="bg-[#f9f9ff] px-32 py-10">
            <div className="bg-white shadow-lg rounded-lg p-20">
            <h1 className="text-4xl font-cherry text-center mb-6">All Post</h1>    
            <div  className=" justify-center p-6">
                {Book.slice(0, 4).map((book, index) => (
                <div
                    key={index}
                    className="flex items-start border border-gray-300 rounded-lg p-4 w-full shadow-md mb-6 bg-white"
                >
                    <img
                        src={book.images[0]}
                        alt={book.title}
                        className="w-28 h-28 object-cover rounded-md mr-4"
                    />
                    <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800">{book.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{book.author}</p>
                    <p className="text-gray-900 font-bold text-lg">{book.price} THB</p>
                   
                    <div className="flex mt-2 space-x-72 ">
                        <p className="text-sm text-gray-400 ">
                            กรุณาใส่ข้อมูลเพิ่มเติม หรือแก้ไขข้อมูลให้ถูกต้อง อ่านข้อมูลเพิ่มเติมได้
                        </p>
                        <div className="flex space-x-4">
                            <Link to={EDITPOST_ROUTE} className=" px-4 py-2 bg-primary text-white rounded-full hover:bg-purple-700">
                                Edit Post
                            </Link>
                            <button className=" px-4 py-2 bg-primary text-white rounded-full hover:bg-purple-700">
                                Delete
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
    </>
  );
};

export default Post;
