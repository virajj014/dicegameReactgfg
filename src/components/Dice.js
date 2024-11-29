import React from 'react'
import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix } from "react-icons/fa";
import './Dice.css'

const diceIcons = [ FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix ]
const Dice = ({value , isRolling}) => {
const DiceIcon = diceIcons[value-1];

  return (
    <div className={`dice ${isRolling? "rolling":""}`}>
        <DiceIcon size={200}/>
    </div>
  )
}

export default Dice