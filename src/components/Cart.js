import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import Ordercard from "../components/Ordercard";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4 ">
      <h1 className="text-xl font-bold mb-4">CART</h1>
      <div className="w-6/12 m-auto">
        <button
          className="w-[110px] h-[40px] text-white rounded-lg font-bold bg-orange-500 mb-9"
          onClick={() => handleClearCart()}
        >
          ClearCart
        </button>
        {cartItems.length === 0 && (
          <div className="flex justify-center flex-col ">
            {" "}
            <img
              className="h-[320px] w-[620px] p-8 mb-4"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
            />{" "}
            <h1 className="font-bold">Your cart is empty</h1>{" "}
            <h3 className="font-normal">
              {" "}
              You can go to home page to view more restaurants
            </h3>
          </div>
        )}

        <Ordercard items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
