import React from "react";
import Priceoption from "./Priceoption";

const Pricingg = () => {
  const pricingOptions = [
    {
      id: 1,
      name: "Free",
      price: 0,
      features: [
        "Free Feature",
        "Extra feature ",
        "Hudai Feature",
        "Ajaira feature",
      ],
    },
    {
      id: 2,
      name: "Medium",
      price: 100,
      features: [
        "Medium Feature",
        "Extra feature ",
        "Hudai Feature",
        "Ajaira feature",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 500,
      features: [
        "Premium Feature",
        "Extra feature ",
        "Hudai Feature",
        "Ajaira feature",
      ],
    },
  ];
  return (
    <div>
      <h1 className="text-5xl font-bold p-12 bg-indigo-300">
        Best deal Of the Town
      </h1>
      <div className="grid md:grid-cols-3 mt-5">
        {pricingOptions.map((option) => (
          <Priceoption key={option.id} option={option}></Priceoption>
        ))}
      </div>
    </div>
  );
};

export default Pricingg;
