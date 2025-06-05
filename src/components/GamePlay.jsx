import React from 'react'
import styled from 'styled-components'
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
const GamePlay = () => {
  return (
    <>
        <UpperPart>
         <TotalScore/>
         <NumberSelector/>
        </UpperPart>
       
    </>
  )
}

export default GamePlay;


const UpperPart = styled.div`
    
    width: 100vw;
    display: flex;
    justify-content:space-between;


`

