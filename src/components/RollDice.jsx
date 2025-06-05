import React from 'react'
import styled from 'styled-components';
const RollDice = ({selectedNumber,IsClicked}) => {
  return (
    <DiceContainer>
        <div className='mainbox'>
            <div className="dice">
                <img src="/src/images/dice_1.png" alt="dice 1" />
            </div>
            
            
            <h4>Click on the Dice to Roll</h4>
            <Button isReset = {true}>Reset Score</Button>
            <Button isReset = {false}>Show Rules</Button>
        </div>

    </DiceContainer>
  )
}

export default RollDice;


const Button = styled.button`
    width: 70%;
    padding: 1px;
    height: 35px;
    align-items: center;
    border-radius:4px;
    border: ${(props)=> props.isReset ? "1px solid black" : "none" };
    background-color:${(props)=> props.isReset ? "white" : "black"};
    color:${(props)=> props.isReset ? "black" : "white"};
    font-weight:600;
    cursor:pointer;


`

const DiceContainer = styled.div`
    
    justify-content: center;
    display: flex;
    align-items: center;
    padding-top:70px;

    .mainbox{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        gap:15px;
        h4{
            text-align: center;
        }
        /* background-color:yellow; */
        .dice{
            cursor: pointer;
        }
    }



`