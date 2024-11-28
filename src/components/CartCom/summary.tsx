

const Summary = () => {
  return (
    <aside className="w-1/3">
      <h3 className="text-lg font-semibold mb-4">Summary</h3>
      <div className="bg-white p-4 shadow rounded-lg">
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>$</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span>$</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Discount</span>
          <span>$</span>
        </div>
        <div className="flex justify-between font-bold mb-4">
          <span>Total</span>
          <span>$</span>
        </div>
        <button className="bg-purple-500 text-white w-full py-2 rounded-full">
          Checkout
        </button>
      </div>
    </aside>
  );
};

export default Summary;
