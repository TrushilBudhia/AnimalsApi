import React from 'react'
import FilterAnimals from './components/filterAnimals'
import DisplayAnimals from './components/displayAnimals'
import { getAnimalsAction } from './actions/animals'
import { store } from './state'
import { AnimalStyled } from './app.styles.js'


export const App = () =>
  <AnimalStyled>
    <FilterAnimals />
    <DisplayAnimals />
  </AnimalStyled>


function getAnimals() {
  store.dispatch(getAnimalsAction())
}
getAnimals()