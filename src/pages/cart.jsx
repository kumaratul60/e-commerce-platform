import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../features/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl mb-4">Shopping Cart</h1>
        <h2 className="text-xl font-medium">Total: ₹{total.toFixed(2)}</h2>
      </div>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-wrap items-center justify-around">
          {items.map((item) => (
            <div key={item.id} className="border p-4 mb-2 w-72 ">
              <img className="w-20 h-20 object-cover" src={item.thumbnail} alt="product img" />
              <h2>{item.title}</h2>
              <p>{item.category}</p>
              <div className="flex items-center justify-between">
                <p className="text-gray-900">
                  ₹{item.price} x {item.quantity}
                </p>
                <p>{Math.floor(item.rating)}⭐</p>

                <button
                  className="bg-red-500 text-white p-2 mt-2 rounded-lg"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
