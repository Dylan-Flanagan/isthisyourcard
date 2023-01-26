import { createContext, useContext, useState } from 'react';
import initialCards from '../cards-data';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [deck, setDeck] = useState(initialCards);
  const [selectedCard, setSelectedCard] = useState();
  const [from, setFrom] = useState();

  return (
    <GameContext.Provider value={(deck, setDeck, selectedCard, setSelectedCard, from, setFrom)}>
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('useGameContext must be used within a GameProvider');
  }

  return context;
};

export { GameProvider, useGameContext };
