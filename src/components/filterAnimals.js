import React from 'react'
import { connect } from 'react-redux'
import FilterItem from './filterItem'
import { FilterStyled, FilterInnerStyled, FilterUlStyled } from './dataDisplay.styles'

export const FilterAnimals = ({ dinoFilter }) => {
  if (dinoFilter.length < 1 ) {
    return null
  }

  return (
    <FilterStyled>
      <FilterInnerStyled>
        <div>Filter List</div>
        <FilterUlStyled>
          {dinoFilter.map((dinoFilterItem, index) => <FilterItem key={index} filterKey={dinoFilterItem.key} filterValue={dinoFilterItem.value} />)}
        </FilterUlStyled>
      </FilterInnerStyled>
    </FilterStyled>
  )
}

export default connect(({ animals }) =>
  ({
    dinoFilter: animals.dinoFilter
  }))(FilterAnimals)
