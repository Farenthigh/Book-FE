import { FaTrash } from "react-icons/fa";

const RentCartItem = ({
  book,
  isSelected,
  toggleSelection,
}: {
  book: any;
  isSelected: boolean;
  toggleSelection: (bookId: number) => void;
}) => {
  return (
    <div className="flex items-center p-4 bg-white shadow rounded-lg mb-4">
      <div className="ml-2 flex items-center">
        <input
            type="checkbox"
            checked={isSelected}
            onChange={() => toggleSelection(book.id)}
            className="mr-2 accent-primary"
        />
      </div>
      <img src={book.images[0]} alt={book.title} className="w-20 h-30 object-cover rounded mr-4" />
      <div className="flex-1">
        <p className="text-sm text-gray-500">{book.category}</p>
        <h4 className="text-lg font-cherry">{book.title}</h4>
        <p className="text-sm text-gray-500">
          By <span className="text-purple-500">{book.author}</span>
        </p>
      </div>
      <div className="items-center">
        <span className="text-xl font-bold">{book.price} THB</span>
        <div className=" flex items-center mt-2">
            <button className="border rounded-full shadow mr-2 px-1">จำนวน: 1</button>
            <FaTrash/>
        </div>
      </div>
    </div>
  );
};

export default RentCartItem;
