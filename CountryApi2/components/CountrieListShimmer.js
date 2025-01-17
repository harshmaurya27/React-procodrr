import React from "react";
import "./CountrieListShimmer.css";
const CountrieListShimmer = () => {
  const shimmerArray = Array.from({ length: 12 }).map((el, idx) => {
    return <div key={idx} className="country-card shimmer-card"></div>;
  });
  return <div className="countries-container">{shimmerArray}</div>;
};

export default CountrieListShimmer;
