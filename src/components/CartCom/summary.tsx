const Summary = ({ total }: { total: number }) => {
  return (
    <aside className="w-full p-4">
      <h3 className="text-2xl font-cherry mb-4 text-center">Summary</h3>
      <div className="bg-white p-4 shadow rounded-xl">
        <div className="flex justify-between mb-4">
          <span>Subtotal</span>
          <span>{total} THB</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Shipping</span>
          <span>0.00 THB</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Discount</span>
          <span>0.00 THB</span>
        </div>
        <div className="flex-grow h-0.5 bg-purple-200"></div>
        <div className="flex justify-between font-bold text-xl mb-8 mt-10">
          <span>Total</span>
          <span>{total} THB</span>
        </div>
        <button className="bg-primary hover:bg-purple-600 text-xl text-white w-full py-2 rounded-full font-cherry">
          Checkout
        </button>
      </div>
    </aside>
  );
};

export default Summary;
