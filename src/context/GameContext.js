import { createContext, useContext, useState } from 'react';
import initialCards from '../cards-data';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [deck, setDeck] = useState(initialCards);
  return <GameContext.Provider value={(deck, setDeck)}>{children}</GameContext.Provider>;
};

export { GameProvider, GameContext };
