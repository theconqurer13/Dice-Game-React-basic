import React from 'react'
import styled from 'styled-components'
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import RollDice from './RollDice';
const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = React.useState(); 
  const [IsClicked,setIsClicked] = React.useState(false);

  return (
    <>
        <UpperPart>
         <TotalScore/>
         <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
        </UpperPart>
        <RollDice selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} setIsClicked={setIsClicked} IsClicked={IsClicked} />
       
    </>
  )
}

export default GamePlay;


const UpperPart = styled.div`
    
    width: 100vw;
    display: flex;
    justify-content:space-between;


`

