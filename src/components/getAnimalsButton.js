import React from 'react'
import { connect } from 'react-redux'
import { getAnimals } from '../actions/animals'

export const GetAnimals = ({ getAnimals }) =>
  <button onClick={() => getAnimals()}>Get Animal List</button>

export default connect(null, { getAnimals })(GetAnimals)
