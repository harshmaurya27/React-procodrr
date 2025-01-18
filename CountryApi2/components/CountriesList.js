import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountrieListShimmer from "./CountrieListShimmer";
// import CountriesData from "../data";

const CountriesList = ({ query }) => {
  const [countriesData, setCountriesData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountriesData(data));

    return () => {
      console.log("running cleanup function while component amount");
    };
  }, []);
  return (
    <>
      {!countriesData.length ? (
        <CountrieListShimmer />
      ) : (
        <div className="countries-container">
          {countriesData
            .filter(
              (country) =>
                country.name.common.toLowerCase().includes(query) ||
                country.region.toLowerCase().includes(query)
            )
            .map((country) => {
              return (
                <CountryCard
                  key={country.name.common}
                  name={country.name.common}
                  flag={country.flags.svg}
                  population={country.population}
                  region={country.region}
                  capital={country.capital?.[0]}
                  data={country}
                />
              );
            })}
        </div>
      )}
    </>
  );
};

export default CountriesList;
