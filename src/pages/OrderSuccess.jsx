import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  if (count == 0) {
    navigate("/");
  }

  return (
    <div className="h-[400px] w-full text-center">
      <div className="mt-10">
        <h1 className="font-bold text-4xl text-red-600">Congratulations!</h1>
        <h2 className=" mt-2 text-2xl">Your order has been placed!</h2>

        <div className="mt-3">
          <p>Returning to home in {count} seconds</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
