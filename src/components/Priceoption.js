import React from "react";
import Feature from "./Feature";

const Priceoption = ({ option }) => {
  const { features } = option;

  return (
    <div className="bg-green-300 m-3 rounded-md p-6">
      <div>
        <p>
          <span className="text-6xl font-bold text-white">{option.price}</span>
          <span className="text-2xl text-grey-200">/mon</span>
        </p>
        <p className="text-2xl my-4">{option.name}</p>
      </div>
      {features.map((feature, idx) => (
        <Feature key={idx} feature={feature}></Feature>
      ))}
      <button className="bg-green-400 w-full rounded-md py-2 text-white font-bold mt-4">
        Buy Now
      </button>
    </div>
  );
};

export default Priceoption;
