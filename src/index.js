const countriesData = require("./country-cities.json")
const CurrencyExplorer = require('currency-explorer');

function getCountries() {
  return Object.keys(countriesData)
}

// filter with continent, country code, country name
function getCountriesWithDetails(filter = null) {
  const countries = Object.entries(countriesData).map(([country, cities]) => {
    return {
      countryName: country,
      continentCode: cities[0].continentCode,
      continentName: cities[0].continentName,
      countryIsoCode: cities[0].countryIsoCode,
    }
  })

  if (!filter) {
    return countries
  }

  // country code priority
  const countryWithCode = countries.filter(
    (c) => c.countryIsoCode === filter
  )
  if (countryWithCode.length) return countryWithCode

  return countries.filter(
    (c) =>
      c.countryName.toLowerCase().includes(filter.toLowerCase()) ||
      c.continentName.toLowerCase().includes(filter.toLowerCase()) ||
      c.countryIsoCode.toLowerCase().includes(filter.toLowerCase())
  )
}

// filter with city name, country name, country code, continent name
function getCities(filter) {
  // NOTE: don't see need of getting all cities, no probable usecase
  if (!filter) return []

  const search = filter.toLowerCase()

  const citiesArr = Object.values(countriesData)

  const cities = citiesArr.flat()
  // country code priority
  const cityWithCode = cities.filter((city) => city.countryIsoCode === filter) 
  if (cityWithCode.length) return cityWithCode

    return cities.filter(
      (city) =>
        city.city.toLowerCase().includes(search) ||
        city.countryIsoCode.toLowerCase().includes(search) ||
        city.countryName.toLowerCase().includes(search) ||
        city.continentName.toLowerCase().includes(search)
    )
}

async function fetchCurrencies() {
  const currencyExplorer = new CurrencyExplorer();
  const countryCurrencies = {};

  const countries = getCountries();

  // Iterate over each country
  for (const country of countries) {
    try {
      const currencyData = await currencyExplorer.getCurrencyByCountry(
        country
      );
      countryCurrencies[country] = currencyData.currencies;
    } catch (error) {
      console.error(`Failed to fetch currency for ${country}:`, error);
    }
  }

  // Return the object containing country currencies
  return countryCurrencies;
}

module.exports = {
  getCountries,
  getCountriesWithDetails,
  getCities,
}
