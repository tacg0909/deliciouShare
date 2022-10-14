import fetchEatingPlaces from "./fetchEatingPlaces"

export type FetchEatingPlacesDataType = {
  name: string
  placeId: string
}

const fetchEatingPlacesData = async (base64Image: string) => {
  const data = await fetchEatingPlaces(base64Image)
    .then((res) => {
      return res.data
    })

  try {
    return data.map((d): FetchEatingPlacesDataType => {
      return {
        name: d.name,
        placeId: d.place_id
      }
    })
  } catch (e) {
  }
  return []
}

export default fetchEatingPlacesData
