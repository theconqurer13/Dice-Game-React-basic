import React from 'react'
import styled from 'styled-components'
const NumberSelector = ({selectedNumber,setSelectedNumber,setIsClicked,arrNumber,message,setMessage}) => {
    
    
  return (
    <SelectNumberContainer message = {message}>
        <h4>You have not selected any number !!</h4>
        <div className="flex">

            {
            arrNumber.map((value,i) => (
                <Box 
                    isSelected = {value == selectedNumber}
                    key={i} 
                    onClick={
                        ()=>{
                            setSelectedNumber(value);
                            setIsClicked(true);
                            if(message){
                                setMessage(!message);
                            }
                        }
                    }
                >{value}</Box>
            ))
        }
        </div>
      <p>
        Select Number
      </p>
    </SelectNumberContainer>
    
  );
};

export default NumberSelector;



const SelectNumberContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: end;
    margin-top:30px;
        margin-right:30px;
    .flex{
        display: flex;
        justify-content:space-evenly;
        gap:10px;
        margin-bottom:10px;
        

    }

    h4{
        color:red;
        display:${(props)=> props.message ? 'block' : 'none'}
    }



`

const Box = styled.div`
    height:72px;
    width:72px;
    border:1px solid #000000;
    display:grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    /* margin: 10px; */
    background-color: ${(props) => 
        props.isSelected ? "black" : "white"
    };
    color: ${(props) => 
        props.isSelected ? "white" : "black"
    };
    cursor: pointer;


`