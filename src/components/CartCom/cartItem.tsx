

const CartItem = () => {
  return (
    <div className="flex items-center p-4 bg-white shadow rounded-lg">
      <img
        src="https://placehold.co/80x120"
        alt="Book cover"
        className="w-20 h-30 mr-4"
      />
      <div className="flex-1">
        <p className="text-sm text-gray-500">Category</p>
        <h4 className="text-lg font-semibold">Book name</h4>
        <p className="text-sm text-gray-500">
          By <span className="text-purple-500">Author name</span>
        </p>
        <p className="text-sm text-gray-500">Read/Scale</p>
      </div>
      <div className="flex items-center">
        <button className="text-gray-500">
          <i className="fas fa-minus"></i>
        </button>
        <span className="mx-2">1</span>
        <button className="text-gray-500">
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
