"use client"
import { useState } from "react";

function Character(name:string) {
  let _life = 1;
  let maxLife = 1;
  let attack = 0;
  let defense = 0;

  return {
    _life,
    maxLife,
    attack,
    defense,
    name
  }
}

export default function Home() {
  const [opponentOne, setopponentOne] = useState(Character("Knight"))
  const [opponentTwo, setopponentTwo] = useState(Character("LittleMonster"))
  return (
    <>
      <div className="fightarea">
        <div id="char">
          <div className="lifebar">
            <div className="bar"></div>
          </div>
          <strong className="name">{opponentOne.name}</strong>
          <div>
            <button className="attackButton">Atacar</button>
          </div>
        </div>
        <div id="monster">
          <div className="lifebar">
            <div className="bar"></div>
          </div>
          <strong className="name">{opponentTwo.name}</strong>
          <div>
            <button className="attackButton">Atacar</button>
          </div>
        </div>
      </div>
    
      <ul className="log"></ul>
    </>
  )
}
