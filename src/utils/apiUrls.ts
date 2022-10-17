import environmentVariables from "./environmentVariables"

const apiUrls = {
  getUserPostsUrl: environmentVariables.getUserPostsUrl,
  getPostUrl: environmentVariables.getPostUrl,
  getPlaceDetailsUrl: "https://maps.googleapis.com/maps/api/place/details/json",
  getMapsEmbedUrl: "https://www.google.com/maps/embed/v1/place",
  getEatingPlacesUrl: environmentVariables.getEatingPlacesUrl,
  fetchPlaceDetailUrl: environmentVariables.fetchPlaceDetailUrl,
  putUserPostUrl: environmentVariables.putUserPostUrl,
}

export default apiUrls
