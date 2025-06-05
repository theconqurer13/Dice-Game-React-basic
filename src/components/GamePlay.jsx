import React from 'react'
import styled from 'styled-components'
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import RollDice from './RollDice';
const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = React.useState(); 
  const [IsClicked,setIsClicked] = React.useState(false);
  const [totalScore, settotalScore] = React.useState(0);
  const arrNumber = [1,2,3,4,5,6];
  const [Reset,setReset] = React.useState(false);
  // console.log(IsClicked);
  return (
    <>
        <UpperPart>
         <TotalScore totalScore={totalScore} />
         <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} setIsClicked={setIsClicked} arrNumber={arrNumber}/>
        </UpperPart>
        <RollDice selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} setIsClicked={setIsClicked} IsClicked={IsClicked} arrNumber = {arrNumber} settotalScore={settotalScore} totalScore={totalScore} setReset={setReset} Reset={Reset} />
       
    </>
  )
}

export default GamePlay;


const UpperPart = styled.div`
    
    width: 100vw;
    display: flex;
    justify-content:space-between;


`

