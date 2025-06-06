import React from 'react'
import styled from 'styled-components';
const ShowRules = ({toShowrules}) => {
  return (
    <RulesContainer toShowrules={toShowrules}>
        <div className="rules">
             <h2>How to play dice game</h2>
            <p>
                Select any number <br />
                Click on dice image <br />
                After click on the dice if the selected number is eqaul to dice number you will get +4 points <br />
                if you get wrong guess then 2 points will be deducted from your score.

            </p>

        </div>
           
        </RulesContainer>
  )
}

export default ShowRules;

const RulesContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    
    .rules{
        width: 40%;
        background-color:#FBF1F1;
        padding:10px;
        border-radius:10px;
        margin-top:20px;
        display : ${(props) => props.toShowrules ? 'block' : 'none'};
    }

`