import React from 'react';
import Shipment from "../../assets/Shipment.png";
import Orders from "../../assets/Orders.png";
import Ordercomplete from "../../assets/Ordercomplete.png";
import ShipmentReturn from "../../assets/ShipmentRe.png";
import OrderReturn from "../../assets/OrderRe.png";


const OrderDetails: React.FC = () => {
    const topIcons = [
        {
          src: Orders,
          label: "Order confirmation",
        },
        {
          src: Shipment,
          label: "Product Shipment",
        },
        {
          src: Ordercomplete,
          label: "Product delivery completed",
        },
        {
          src: ShipmentReturn,
          label: "Return Product",
        },
        {
          src: OrderReturn,
          label: "Product Return Completed",
        },
      ];
  return (
    <div className="flex items-center justify-center bg-[#f9f9ff] px-4 md:px-10 lg:px-32 py-10">
      <div className="w-full bg-white shadow-lg rounded-lg md:p-10">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-cherry font-bold mb-6 md:mb-8 text-center">
          Order Details
        </h2>

        <div className="border-2 border-primary rounded-xl shadow-lg">
          <div className="bg-primarycontainer border-b-2 border-primary drop-shadow-lg p-4 rounded-xl mb-4 font-serif">
            <p>
              <strong>Purchase Order :</strong>
            </p>
            <p>ordered on</p>
          </div>

          <div className="flex flex-wrap justify-center gap-10 md:gap-10 mt-20">  
                  {topIcons.map((icon, index) => (
                    <div key={index} className="text-center text-sm ">
                      <div className="w-20 h-20 md:w-32 md:h-32 mx-auto rounded-full border border-primary shadow-md p-3 flex items-center justify-center hover:scale-110 hover:bg-primarycontainer transition-transform duration-300">
                        <img
                          src={icon.src}
                          alt={icon.label}
                          className="w-20 h-20 md:w-30 md:h-30 object-contain "
                        />
                      </div>
                      <p className="font-cherry mt-2 text-xs md:text-sm ">{icon.label}</p>
                    </div>
                  ))}
            </div>

          <div className="text-center my-10 md:my-20">
            <strong className="text-base md:text-lg font-serif text-gray-700">
              ไม่มีคำสั่งซื้อในขณะนี้
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
