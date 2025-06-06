
import React from 'react';
import StartGame from './components/startGame';
import GamePlay from './components/GamePlay';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <>
      {/* <StartGame/> */}
      {/* <GamePlay/> */}

      <Router>
        <Routes>
          <Route path='/' element ={<StartGame/>} /> 
          <Route path='/playGame' element ={<GamePlay/>} /> 

        </Routes>



      </Router>
      

    </>
  )
}

export default App;