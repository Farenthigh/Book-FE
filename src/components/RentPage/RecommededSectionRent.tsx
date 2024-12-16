// import { useState } from "react";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { Link } from "react-router-dom";
// import { R_DETAIL_ROUTE } from "../../context/Route";
// import Heart from "../Catagories/Heart";
// import Book from "../Mockdata/Book.json";

// function RecommededSectionRent() {
//   const [visibleBooks, setVisibleBooks] = useState(3);
//   const [isExpanded, setIsExpanded] = useState(false);

//   const loadMoreBooks = () => {
//     if (!isExpanded) {
//       setVisibleBooks(Book.length);
//     } else {
//       setVisibleBooks(3);
//     }
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <section>
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-3xl font-cherry">Recommended</h2>
//         <a
//           href="#"
//           onClick={(e) => {
//             e.preventDefault();
//             loadMoreBooks();
//           }}
//           className="flex items-center font-serif text-lg"
//         >
//           More
//           {isExpanded ? (
//             <IoIosArrowUp className="ml-2 h-5 w-5" />
//           ) : (
//             <IoIosArrowDown className="ml-2 h-5 w-5" />
//           )}
//         </a>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
//         {Book.slice(0, visibleBooks).map((book, index) => (
//           <div
//             key={index}
//             className="border rounded-lg p-4 text-center relative w-72 shadow-md"
//           >
//             <img
//               src={book.images[0]}
//               alt={book.title}
//               className=" w-full h-48 object-contain rounded-md mb-2"
//             />
//             <h3 className="text-sm font-cherry font-bold">{book.title}</h3>
//             <p className="text-sm text-gray-500 mb-2">{book.author}</p>
//             <p
//               className={`p-4 text-right text-lg font-bold ${
//                 book.status === "Rented" ? "text-rented" : "text-available"
//               }`}
//             >
//               {book.status}
//             </p>
//             <div className="absolute top-2 right-2 flex items-center justify-center bg-gray-300 rounded-full w-8 h-8">
//               <Heart />
//             </div>
//             <Link
//               to={R_DETAIL_ROUTE}
//               className="mt-2 mb-2 px-4 py-1 bg-primary font-cherry text-white rounded-full hover:bg-purple-600 transition"
//             >
//               Show details
//             </Link>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default RecommededSectionRent;
