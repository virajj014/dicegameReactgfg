import logo from './logo.svg';
import './App.css';
import MyIntro from './components/MyIntro';
import { useState } from 'react';
import Dice from './components/Dice';

function App() {
  // 
  const [diceValues, setDiceValues] = useState([1, 1]);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    setIsRolling(true);

    setTimeout(()=>{
      let val1 = Math.floor(Math.random()*6)+1;
      let val2 = Math.floor(Math.random()*6)+1;

      setDiceValues([val1, val2]);
      setIsRolling(false);
    },1000)
  }

  return (
    <div className="App">
      <h1>Dice Game</h1>
      <div className='dice-container'>
        <Dice value={diceValues[0]} isRolling={isRolling} />
        <Dice value={diceValues[1]} isRolling={isRolling} />
      </div>
      <button
        onClick={rollDice}
        disabled={isRolling}
      >{
        isRolling ? "Rolling..." : "Roll Dice"
      }</button>
    </div>
  );
}

export default App;
