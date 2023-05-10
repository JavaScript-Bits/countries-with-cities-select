import {getCities} from './utils.js'

import fs from 'fs';
import _ from 'lodash';
import path from 'path';
import {parse} from 'csv-parse'

// getCities()

export const getCitiesDetailsFromCsv = async () => {
  const content = fs.readFileSync("./src/world-cities-select-input.csv")

  const records = []
  let cityDetails
  // Initialize the parser
//   const parser = parse({
//     delimiter: ":",
//   })
const parser = parse(content)
  // Use the readable stream api to consume records
  parser.on("readable", function () {
    let record
    while ((record = parser.read()) !== null) {
      records.push(record)
    }

    // console.log({ records })

    cityDetails = records.map((r) => {
       const [
         id,
         localeCode,
         continentCode,
         continentName,
         countryIsoCode,
         countryName,
         subDivision1IsoCode,
         subDivision1Name,
         subDivision2IsoCode,
         subDivision2Name,
         city,
         metroCode,
         timezone,
         isInEU,
       ] = r

       return {
         id,
         localeCode,
         continentCode,
         continentName,
         countryIsoCode,
         countryName,
         subDivision1IsoCode: _.isEmpty(subDivision1IsoCode)
           ? null
           : subDivision1IsoCode,
         subDivision1Name: _.isEmpty(subDivision1Name)
           ? null
           : subDivision1Name,
         subDivision2IsoCode: _.isEmpty(subDivision2IsoCode)
           ? null
           : subDivision2IsoCode,
         subDivision2Name: _.isEmpty(subDivision2Name)
           ? null
           : subDivision2Name,
         city,
         metroCode: _.isEmpty(metroCode) ? null : metroCode,
         timezone,
         isInEU: Boolean(isInEU),
       }
     })

    //  console.log({ cityDetails })

     const finalList = cityDetails.reduce((final, member) => {
        console.log({ member })

       const hub = member.countryName

       if (!hub) return final

       return {
         ...final,
         [hub]: [...(final[hub] || []), member],
       }
     }, {})

     try {
       fs.writeFileSync("src/result.txt", JSON.stringify(finalList))
       // eslint-disable-next-line no-empty
     } catch (e) {}
     
  })

//   const rows = parse(content)
}

getCitiesDetailsFromCsv()


