import React from "react";
import { useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { useDispatch } from "react-redux";
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();


  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4 ">
      <h1 className="text-xl font-bold mb-2">CART</h1>
      <div className="w-6/12 m-auto">
        <button
          className="w-[110px] h-[40px] text-white rounded-lg font-bold bg-orange-500"
          onClick={() => handleClearCart()}
        >
          ClearCart
        </button>
        {cartItems.length === 0 && <h1> You Cart is Empty . Please Add Somethings</h1> }

        <Itemlist items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
