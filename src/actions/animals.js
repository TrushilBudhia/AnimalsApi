export const FILTER_DINOSAURS = 'FILTER_DINOSAURS'
export const filterAnimals = ({ key, value }) => {
  return {
    type: FILTER_DINOSAURS,
    key,
    value
  }
}

export const GET_DINOSAURS = 'GET_DINOSAURS'
export const getAnimalsAction = () => {
  return {
    type: GET_DINOSAURS,
  }
}

export const DATA_FETCH_UPDATED = 'DATA_FETCH_UPDATED'
export const dataFetchUpdated = animals => {
  return {
    type: DATA_FETCH_UPDATED,
    animals
  }
}

export const API_UNAVAILABLE = 'API_UNAVAILABLE'
export const apiUnavailable = reason => {
  return {
    type: API_UNAVAILABLE,
    reason
  }
}

export const API_AVAILABLE = 'API_AVAILABLE'
export const apiAvailable = () => {
  return {
    type: API_AVAILABLE
  }
}
