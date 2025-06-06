import React from 'react'
import styled from 'styled-components';
const RollDice = ({selectedNumber,IsClicked,totalScore,settotalScore,toShowrules,settoShowrules,setMessage}) => {
    
    const [Address,setAddress] = React.useState('/src/images/dice_1.png');
    const [text,settext] = React.useState('Show Rules');
    
  return (
    <DiceContainer>
        <div className='mainbox'>
            <div className="dice" onClick={
                () =>{
                    if(IsClicked){
                        var random = Math.floor(Math.random() * 6) + 1;
                        if(random == 1){
                            setAddress('/src/images/dice_1.png');
                            if(random == selectedNumber){
                                settotalScore(totalScore + 4);
                            }else{
                                settotalScore(totalScore - 1);
                            }
                        }else if(random == 2){
                            setAddress('/src/images/dice_2.png');
                            if(random == selectedNumber){
                                settotalScore(totalScore + 4);
                            }else{
                                settotalScore(totalScore - 1);
                            }
                        }else if(random == 3){
                            setAddress('/src/images/dice_3.png');
                            if(random == selectedNumber){
                                settotalScore(totalScore + 4);
                            }else{
                                settotalScore(totalScore - 1);
                            }
                        }else if(random == 4){
                            setAddress('/src/images/dice_4.png');
                            if(random == selectedNumber){
                                settotalScore(totalScore + 4);
                            }else{
                                settotalScore(totalScore - 1);
                            }
                        }else if(random == 5){
                            setAddress('/src/images/dice_5.png');
                            if(random == selectedNumber){
                                settotalScore(totalScore + 4);
                            }else{
                                settotalScore(totalScore - 1);
                            }
                        }else {
                            setAddress('/src/images/dice_6.png');
                            if(random == selectedNumber){
                                settotalScore(totalScore + 4);
                            }else{
                                settotalScore(totalScore - 1);
                            }
                        }
                    }else{
                        setMessage(true);
                    }
                }
            }>
                <img src={Address} alt="dice img" />
            </div>
            
            
            <h4>Click on the Dice to Roll</h4>
            <Button isReset = {true} onClick={()=>settotalScore(0)}>Reset Score</Button>
            <Button isReset = {false} onClick={()=>{ 
                settoShowrules(toShowrules => !toShowrules);
                if(!toShowrules){
                    settext('Hide Rules');
                }else{
                    settext('Show Rules');
                }
                
            }} >{text}</Button>
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
    padding-top:50px;

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