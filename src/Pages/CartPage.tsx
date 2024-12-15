import { useState } from "react";
import RentCartItem from "../components/CartCom/Rentitem";
import PurchaseCartItem from "../components/CartCom/Saleitem";
import Summary from "../components/CartCom/summary";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const books = [
  {
    id: 1,
    title: "ปรมาจารย์ลัทธิมาร ฉบับการ์ตูน เล่ม 1",
    author: "Mo Xiang Tong Xiu",
    category: "Manga",
    price: 100,
    status: "Available",
    images: [
      "https://mp-static.se-ed.com/physical/cover/wcubtiofyaw78fbnsn95/image/bgzu6g7l",
    ],
  },
  {
    id: 2,
    title: "Dragon Ball",
    author: "Chun Wang Chi Han",
    category: "Fiction",
    price: 150,
    status: "Rented",
    images: [
      "https://mp-static.se-ed.com/physical/cover/il81ty93a5dn8hcq8ghx/image/9kh360s8",
    ],
  },
  {
    id: 3,
    title: "Attack on Titan",
    author: "Mo Xiang Tong Xiu",
    category: "Manga",
    price: 120,
    status: "Available",
    images: [
      "https://mp-static.se-ed.com/physical/cover/runlwoc767e1rmx621bo/image/mdjqs3z3",
    ],
  },
  {
    id: 4,
    title: "Attack on Titan",
    author: "Mo Xiang Tong Xiu",
    category: "Manga",
    price: 120,
    status: "Available",
    images: [
      "https://mp-static.se-ed.com/physical/cover/runlwoc767e1rmx621bo/image/mdjqs3z3",
    ],
  },
  {
    id: 5,
    title: "Attack on Titan",
    author: "Mo Xiang Tong Xiu",
    category: "Manga",
    price: 120,
    status: "Rented",
    images: [
      "https://mp-static.se-ed.com/physical/cover/runlwoc767e1rmx621bo/image/mdjqs3z3",
    ],
  },
  {
    id: 6,
    title: "Attack on Titan",
    author: "Mo Xiang Tong Xiu",
    category: "Manga",
    price: 120,
    status: "Rented",
    images: [
      "https://mp-static.se-ed.com/physical/cover/runlwoc767e1rmx621bo/image/mdjqs3z3",
    ],
  },
];

const Cart = () => {
  const rentalBooks = books.filter((book) => book.status === "Rented");
  const purchaseBooks = books.filter((book) => book.status === "Available");

  const [selectedBooks, setSelectedBooks] = useState<number[]>([]); 
  const [selectAll, setSelectAll] = useState(false); 
  const [selectedRentalBooks, setSelectedRentalBooks] = useState<number[]>([]); 
  const [selectAllRental, setSelectAllRental] = useState(false); 

  const toggleSelection = (bookId: number) => {
    setSelectedBooks((prev) =>
      prev.includes(bookId)
        ? prev.filter((id) => id !== bookId) 
        : [...prev, bookId] 
    );
  };

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedBooks([]); 
    } else {
      setSelectedBooks(purchaseBooks.map((book) => book.id)); 
    }
    setSelectAll(!selectAll); 
  };

  const toggleSelectAllRental = () => {
    if (selectAllRental) {
      setSelectedRentalBooks([]); 
    } else {
      setSelectedRentalBooks(rentalBooks.map((book) => book.id)); 
    }
    setSelectAllRental(!selectAllRental); 
  };

  const totalSelectedPrice = purchaseBooks
    .filter((book) => selectedBooks.includes(book.id))
    .reduce((sum, book) => sum + book.price, 0);

  const totalSelectedRentalPrice = rentalBooks
    .filter((book) => selectedRentalBooks.includes(book.id))
    .reduce((sum, book) => sum + book.price, 0);

  const total = totalSelectedPrice + totalSelectedRentalPrice;

  const navigate = useNavigate();

  return (
    <div className="bg-[#f9f9ff] text-gray-800 px-24 py-8">
      <header className="flex items-center text-xl font-cherry mb-16 text-left">
        <button onClick={() => navigate(-1)} className="flex items-center text-gray-700 hover:text-black">
          <IoIosArrowBack className="mr-2 text-2xl" />
          <span>Your Cart</span>
        </button>
      </header>
      <main className="flex space-x-10 ml-10">
        <div className="flex-[2]">
          <section className="mb-10 ">
            <h3 className="text-2xl font-cherry mb-4">
              Purchase Items <span className="text-purple-500 text-lg">({purchaseBooks.length} items)</span>
            </h3>
            <div className="h-72 overflow-y-auto border rounded-lg p-2 shadow">
              <div className="mb-4 flex items-center ml-2">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={toggleSelectAll}
                  className="mr-2 accent-primary"
                />
                <label className="text-2sm">Select All</label>
              </div>
              {purchaseBooks.map((book) => (
                <PurchaseCartItem
                  key={book.id}
                  book={book}
                  isSelected={selectedBooks.includes(book.id)}
                  toggleSelection={toggleSelection}
                />
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-cherry mb-4 ">
              Rental Items <span className="text-purple-500 text-lg">({rentalBooks.length} items)</span>
            </h3>
            <div className="h-72 overflow-y-auto border rounded-lg p-2 shadow">
              <div className="mb-4 flex items-center ml-2">
                <input
                  type="checkbox"
                  checked={selectAllRental}
                  onChange={toggleSelectAllRental}
                  className="mr-2 accent-primary"
                />
                <label className="text-2sm">Select All </label>
              </div>
              {rentalBooks.map((book) => (
                <RentCartItem
                  key={book.id}
                  book={book}
                  isSelected={selectedRentalBooks.includes(book.id)}
                  toggleSelection={(bookId: number) =>
                    setSelectedRentalBooks((prev) =>
                      prev.includes(bookId)
                        ? prev.filter((id) => id !== bookId) 
                        : [...prev, bookId] 
                    )
                  }
                />
              ))}
            </div>
          </section>
        </div>
        <div className="flex-[1] ">
          <Summary total={total} />
        </div>
      </main>
    </div>
  );
};

export default Cart;
