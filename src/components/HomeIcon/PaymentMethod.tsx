import Payment from "../../assets/QR Payment.png";

function PaymentMethod() {
  return (
    <div className="flex justify-center items-center bg-[#f9f9ff] px-32 py-10 min-h-screen">
      <div className="w-full bg-white shadow-lg rounded-lg p-5 flex flex-col items-center justify-between">
        <div className="flex items-center w-full">
          <div className="flex-grow border-t-2 border-purple-200"></div>
          <h2 className="text-3xl font-cherry mx-4 whitespace-nowrap">วิธีการเช่าหนังสือ</h2>
          <div className="flex-grow border-t-2 border-purple-200"></div>
        </div>
        <div className="mt-10 flex justify-center items-center">
          <img src={Payment} className="rounded-3xl max-w-full h-auto" alt="QR Payment" />
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;
