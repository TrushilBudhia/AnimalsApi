import { FILTER_DINOSAURS, GET_DINOSAURS, DATA_FETCH_UPDATED, API_AVAILABLE, API_UNAVAILABLE, dataFetchUpdated, apiAvailable, apiUnavailable } from '../actions'
import { store } from '../state'
import { getDataFromApi } from '../api'

export function animalsReducer(state = { animals: [], dinoFilter:[], isAvailable: true, unavailableReason: '' }, action = { type: '' }) {
  switch (action.type) {
    case FILTER_DINOSAURS: {
      return {
        ...state,
        dinoFilter: state.dinoFilter.map(dinoFilterItem => {
          return (
            dinoFilterItem.key === action.key ? {...dinoFilterItem, value: action.value} : dinoFilterItem
          )
        })
      }
    }

    case GET_DINOSAURS:
      getDataFromApi()
        .then(animals => store.dispatch(dataFetchUpdated(animals)))
        .then(() => store.dispatch(apiAvailable()))
        .catch(err => {console.log(err.message); store.dispatch(apiUnavailable(err.message))})
      return state

    case DATA_FETCH_UPDATED: {
      const animalKeysArray = Object.keys(action.animals[0])

      const dinoFilterArray = animalKeysArray.map(animalKey => {
        return {key: animalKey, value: true}
      })

      return {
        ...state,
        animals: action.animals,
        dinoFilter: dinoFilterArray
      }
    }

    case API_AVAILABLE: {
      return {
        ...state,
        isAvailable: true,
        unavailableReason: ''
      }
    }

    case API_UNAVAILABLE: {
      return {
        ...state,
        isAvailable: false,
        unavailableReason: action.reason
      }
    }

    default: {
      return state
    }
  }
}
