[![npm version](https://badge.fury.io/js/countries-with-cities-select.svg)](https://github.com/JavaScript-Bits/countries-with-cities-select) [![npm version](https://badgen.net/npm/dt/countries-with-cities-select)](https://github.com/JavaScript-Bits/countries-with-cities-select) [![npm version](https://badgen.net/npm/license/lodash)](https://github.com/JavaScript-Bits/countries-with-cities-select)

# countries-with-cities-select
Retrieve all countries with cities

## Table of Contents 
+ [Get countries](#get-countries)
+ [Get countries with details](#get-countries-with-details)
+ [Get cities](#get-cities) 

## Features
+ Get names, codes and cities of all countries
+ Filter cities by country name, country code, continent name

## Installing

```
npm install countries-with-cities-select

OR

yarn add countries-with-cities-select

```
Once the package is installed you use the require/import approach

```javascript
const countriesWithCities = require('countries-with-cities-select');

OR

import countriesWithCities from 'countries-with-cities-select'

```

Or with TypeScript
```typescript
import * as countriesWithCities from 'countries-with-cities-select'
```
create a `.d.ts` file and add
```ts
declare module 'countries-with-cities-select'
```

## #Get countries
This will list all countries.
```javascript

const countriesWithCities = require('countries-with-cities-select');
// To get all countries
countriesWithCities.getCountries();

```

## #Get countries with details
This will retrieve information about countries with code, continent etc. Filter by country name, country code or continent
```javascript

const countriesWithCities = require('countries-with-cities-select');

countriesWithCities.getCountriesWithDetails();

// To get the countries with code, name or continent name
countriesWithCities.getCountriesWithDetails("kenya");
// use exact code to filter country with code
countriesWithCities.getCountriesWithDetails("KE");
countriesWithCities.getCountriesWithDetails("africa");

```

## #Get cities
This will retrieve information about cities. Filter with country name, country code or continent
Empty filter will return no cities

```javascript
const countriesWithCities = require('countries-with-cities-select');

// To get all cities in a country
countriesWithCities.getCities('kenya'); 

// To get all cities in a continent
countriesWithCities.getCities('africa');

// To get all cities in a country with code
countriesWithCities.getCities('ke');

// To getcity with name
countriesWithCities.getCities('nairobi');


```

## License

[MIT](LICENSE)

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge)](#)

[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source-200x33.png?v=103)](#)

Happy coding, Star before Fork 😊💪💯