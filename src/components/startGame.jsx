import React from 'react'
import styled from 'styled-components'
const startGame = () => {
  return (
    <Container>
        <div style={{}}>
                 <img src="/src/images/dices 1.png" alt="dice img" />    
        </div>
        <div  style={{
        display:'flex',
        flexDirection:'column-reverse',
        alignItems:'end',
        justifyContent:'center',
        }}>
            <Button>Play Now </Button>
            <h1 style={{
                fontSize: 80,
            }}>
                Dice Game 
            </h1>
            
        </div>
    </Container>
  )
}

export default startGame;

const Container = styled.div`
    max-width:1180px;
    display: flex;
    /* justify-content:space-evenly; */
    /* padding 50px; */
    gap: 80px;
    height:100vh;
    margin:0 auto;
    align-items:center;
    /* padding-top:10px; */

    

`;

const Button = styled.button`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:10px 18px;
    gap:10px;
    border:none;
    width:220px;
    height:44px;
    color:white;
    background-color: black;
    border-radius: 5px;



`;

