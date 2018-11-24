import React from 'react'
import { connect } from 'react-redux'
import Animal from './animal'
import { DisplayAnimalsStyled, DisplayAnimalsTitleStyled } from './dataDisplay.styles'

export const DisplayAnimals = ({ animals }) =>
{
  return (
    <DisplayAnimalsStyled>
      <DisplayAnimalsTitleStyled>My Favourite Dogs</DisplayAnimalsTitleStyled>
      {animals.map(animal => <Animal key={animal.id} {...animal} />)}
    </DisplayAnimalsStyled>
  )
}

export default connect(({ animals }) =>
  ({
    animals: animals.animals
  })
)(DisplayAnimals)
