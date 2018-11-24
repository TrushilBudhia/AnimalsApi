import React from 'react'
import { connect } from 'react-redux'
import { filterAnimals } from '../actions/animals'
import { FilterLiStyled } from './dataDisplay.styles'

const FilterItem = ({ filterKey, filterValue, filterAnimals }) => {
  let checkboxInput = React.createRef();

  function handleFilterChange() {

    filterAnimals({ key: filterKey, value: checkboxInput.current.checked })
  }

  if(filterKey !==  'id') {
    return (
      <FilterLiStyled>
        <label>
          <input type='checkbox' checked={filterValue} ref={checkboxInput} onChange={handleFilterChange} />
          {filterKey}
        </label>
      </FilterLiStyled>
    )
  } else{
    return  null
  }
}

export default connect(null, { filterAnimals })(FilterItem)
