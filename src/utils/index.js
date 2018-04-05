const apiEndpoint = `https://api.bitfinex.com/v2/`

export const fetchJSON = async (resource) => {
  const response = await fetch(`${apiEndpoint}${resource}`)

  return await response.json()
};

export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
