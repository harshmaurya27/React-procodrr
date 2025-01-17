import React, { useEffect, useState } from "react";
import "./CountryDetail.css";
import {
  Link,
  useLocation,
  useParams,
  useOutletContext,
} from "react-router-dom";
const CountryDetails = () => {
  const [isDark] = useOutletContext();
  const [counrtyDetail, setCountryDetail] = useState(null);

  const [notFound, setNotFound] = useState(false);
  const params = useParams();
  const { state } = useLocation();
  // const countryName = new URLSearchParams(location.search).get("name");
  const countryName = params.country;

  function updateCountryData(data) {
    setCountryDetail({
      name: data.name.common,
      flag: data.flags.svg,
      nativeName: Object.values(data.name.nativeName)[0].common,
      population: data.population,
      region: data.region,
      subregion: data.subregion,
      capital: data.capital.join(" "),
      tld: data.tld,
      currencies: Object.values(data.currencies)
        .map((currency) => currency.name)
        .join(","),
      languages: Object.values(data.languages).join(","),
      borders: [],
    });

    //--------------
    if (!data.border) {
      data.borders = [];
    }
    //----

    Promise.all(
      data.borders.map((border) => {
        // es wale return se array of promises mil jayega
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common);
      })
    ).then((allBordersName) => {
      setTimeout(() =>
        setCountryDetail((prevState) => ({
          ...prevState,
          borders: allBordersName,
        }))
      );
    });
  }

  useEffect(() => {
    if (state) {
      updateCountryData(state);
      return;
    }
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryData(data);
      })
      .catch((err) => {
        console.log(err);
        setNotFound(true);
      });
  }, [countryName]);

  if (notFound) {
    return <h1>Country Not Found</h1>;
  }
  return counrtyDetail === null ? (
    "loading...."
  ) : (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={counrtyDetail.flag} alt={CountryDetails.name} />
          <div className="details-text-container">
            <h1>{counrtyDetail.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: </b>
                <span className="native-name"> {counrtyDetail.nativeName}</span>
              </p>
              <p>
                <b>Population: </b>
                <span className="population">{counrtyDetail.population}</span>
              </p>
              <p>
                <b>Region: </b>
                <span className="region">{counrtyDetail.region}</span>
              </p>
              <p>
                <b>Sub Region: </b>
                <span className="sub-region">
                  {counrtyDetail.subregion || "Unkown"}
                </span>
              </p>
              <p>
                <b>Capital: </b>
                <span className="capital">{counrtyDetail.capital}</span>
              </p>
              <p>
                <b>Top Level Domain: </b>
                <span className="top-level-domain">{counrtyDetail.tld}</span>
              </p>
              <p>
                <b>Currencies: </b>
                <span className="currencies">{counrtyDetail.currencies}</span>
              </p>
              <p>
                <b>Languages: </b>
                <span className="languages">{counrtyDetail.languages}</span>
              </p>
            </div>
            {counrtyDetail.borders.length !== 0 && (
              <div className="border-countries">
                <b>Border Countries: </b>&nbsp;
                {counrtyDetail.borders.map((border) => (
                  <Link key={border} to={`/${border}`}>
                    {border}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryDetails;
