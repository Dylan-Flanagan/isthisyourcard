import React from 'react';
import { useGameContext } from '../context/GameContext.js';
import Card from './Card';

export default function ExecutePassButton({ passCard, to }) {
  const { selectedCard, setSelectedCard, from } = useGameContext();

  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} setSelectedCard={setSelectedCard} /> from {from} to {to}
    </div>
  );
}
