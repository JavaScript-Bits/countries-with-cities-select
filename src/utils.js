import Papa from "papaparse"

export const getCities = async () => {
  const data = Papa.parse("/world-cities-select-input.csv", { delimiter: "," })
  console.log({data})
  console.log({data1: data.data})
  return data
}
