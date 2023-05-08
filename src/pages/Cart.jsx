import React, { useState } from "react";
import { CartContextProvider } from "../store/CartContext";
import CartProduct from "../components/CartPageComponents/CartProduct";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { UserAuth } from "../store/AuthContext";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartData } = CartContextProvider();
  const [checkout, setCheckout] = useState(false);
  const { userId } = UserAuth();
  const navigate = useNavigate();

  const deleteOrder = () => {
    cartData.map((cart) => {
      navigate("/order-success");

      setTimeout(() => {
        const cartRef = doc(db, "cart", userId, "orders", cart.id);
        deleteDoc(cartRef).catch((error) => {
          console.log(error);
        });
      }, 2000);
    });
  };

  let totalPayment = 0;
  let shippingFee = 0;

  totalPayment = cartData.reduce(
    (total, cart) => cart.quantity * cart.item.price + total,
    0
  );

  if (totalPayment > 1000) shippingFee = 15;
  if (totalPayment > 1500) shippingFee = 20;

  const handleCheckout = () => {
    setCheckout(true);
  };

  return (
    <>
      <div className="2xl:max-w-[1280px] mx-auto py-5 w-full px-5">
        <h1 className="mb-5 text-3xl font-josefinBold">
          Your Shopping Cart has {cartData.length} items.
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div className="w-[500px] col-span-2">
            {cartData?.map((cart) => (
              <CartProduct key={cart.id} cart={cart} />
            ))}
          </div>

          <div className="col-span-1">
            <h1 className="text-2xl font-semibold mb-2 border-b-2 border-black/90 pb-2">
              Order Summary
            </h1>

            <div className="space-y-3">
              <div className="text-xl flex justify-between">
                <h2>Subtotal:</h2>
                <p>${totalPayment.toFixed(2)}</p>
              </div>

              <div className="text-xl flex justify-between">
                <h2>Shipping Fee:</h2>
                <p>{shippingFee <= 0 ? "FREE" : `$${shippingFee}.00`}</p>
              </div>

              <div className="text-xl flex justify-between font-bold border-t-[1px] border-black/90 pt-2">
                <h2>Total:</h2>
                <p>${(totalPayment + shippingFee).toFixed(2)}</p>
              </div>
            </div>

            <button
              className={`${
                checkout ? "hidden" : ""
              } bg-black/80 text-white text-xl py-4 mt-6 w-full hover:bg-black/95`}
              onClick={handleCheckout}
            >
              Checkout
            </button>
            <div className={`${checkout ? "" : "hidden"} mt-2`}>
              <PayPalScriptProvider
                options={{ "client-id": import.meta.env.VITE_CLIENT_ID }}
              >
                <PayPalButtons
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: totalPayment,
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then(function (details) {
                      deleteOrder();
                      // alert(
                      //   "Transaction completed by " +
                      //     details.payer.name.given_name
                      // );
                    });
                  }}
                />
              </PayPalScriptProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
