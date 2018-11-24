import React from 'react'
import { connect } from 'react-redux'
import { AnimalUlStyled, AnimalLiStyled } from './dataDisplay.styles'

const Animal = ({ id, name, size, lowShedding, easyToGroom, highEnergy, goodHealth, intelligence, easyToTrain, friendliness, tolerates, notes, dinoFilter }) => {
  let showName = false
  let showsize = false
  let showLowShedding = false
  let showEasyToGroom = false
  let showHighEnergy = false
  let showGoodHealth = false
  let showIntelligence = false
  let showEasyToTrain = false
  let showFriendliness = false
  let showTolerates = false
  let showNotes = false

  dinoFilter.map(dinoFilterItem => {
    showName = (dinoFilterItem.key === 'name' ? dinoFilterItem.value : showName)
    showsize = (dinoFilterItem.key === 'size' ? dinoFilterItem.value : showsize)
    showLowShedding = (dinoFilterItem.key === 'lowShedding' ? dinoFilterItem.value : showLowShedding)
    showEasyToGroom = (dinoFilterItem.key === 'easyToGroom' ? dinoFilterItem.value : showEasyToGroom)
    showHighEnergy = (dinoFilterItem.key === 'highEnergy' ? dinoFilterItem.value : showHighEnergy)
    showGoodHealth = (dinoFilterItem.key === 'goodHealth' ? dinoFilterItem.value : showGoodHealth)
    showIntelligence = (dinoFilterItem.key === 'intelligence' ? dinoFilterItem.value : showIntelligence)
    showEasyToTrain = (dinoFilterItem.key === 'easyToTrain' ? dinoFilterItem.value : showEasyToTrain)
    showFriendliness = (dinoFilterItem.key === 'friendliness' ? dinoFilterItem.value : showFriendliness)
    showTolerates = (dinoFilterItem.key === 'tolerates' ? dinoFilterItem.value : showTolerates)
    showNotes = (dinoFilterItem.key === 'notes' ? dinoFilterItem.value : showNotes)
    return false
  })

  return (
    <AnimalUlStyled>
      {showName && <AnimalLiStyled>Name: {name}</AnimalLiStyled>}
      {showsize && <AnimalLiStyled>Size: {size}</AnimalLiStyled>}
      {showLowShedding && <AnimalLiStyled>Low Shedding: {lowShedding}</AnimalLiStyled>}
      {showEasyToGroom && <AnimalLiStyled>Easy To Groom: {easyToGroom}</AnimalLiStyled>}
      {showHighEnergy && <AnimalLiStyled>High Energy: {highEnergy}</AnimalLiStyled>}
      {showGoodHealth && <AnimalLiStyled>Good Health: {goodHealth}</AnimalLiStyled>}
      {showIntelligence && <AnimalLiStyled>Intelligence: {intelligence}</AnimalLiStyled>}
      {showEasyToTrain && <AnimalLiStyled>Easy To Train: {easyToTrain}</AnimalLiStyled>}
      {showFriendliness && <AnimalLiStyled>Friendliness: {friendliness.kids} with Kids, ({friendliness.otherDogs} with Other Dogs</AnimalLiStyled>}
      {showTolerates && <AnimalLiStyled>Tolerates: {tolerates.hot} Hot, ({tolerates.cold} Cold</AnimalLiStyled>}
      {showNotes && <AnimalLiStyled>Notes:</AnimalLiStyled>}
      {showNotes && <AnimalLiStyled>
        <ul>
          {notes.map((note, index) =>
            <li key={index}>{note}</li>
          )}
        </ul>
      </AnimalLiStyled>
      }
    </AnimalUlStyled>
  )
}

export default connect(({ animals }) =>
({
  dinoFilter: animals.dinoFilter
}))(Animal)
