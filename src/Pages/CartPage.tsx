import CartItem from "../components/CartCom/cartItem";
import Summary from "../components/CartCom/summary";

const CartPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen font-roboto">
            <div className="container mx-auto p-4">

                <main className="flex space-x-8">
                    <CartItem />
                    <Summary />
                </main>
            </div>
        </div>
    );
};

export default CartPage;