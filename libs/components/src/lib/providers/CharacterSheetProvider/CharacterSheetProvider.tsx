import * as React from 'react';
import { CharacterSheet, initCharacterSheet, assertNever } from '@trailsearcher/character-sheet';

export const CharacterSheetContext = React.createContext<[CharacterSheet, React.Dispatch<Action>]>(null);

type Action = { type: 'SET'; payload: CharacterSheet } | { type: 'NEW' };

const csReducer: React.Reducer<CharacterSheet, Action> = (state, action) => {
  switch (action.type) {
    case 'SET':
      return action.payload;
    case 'NEW':
      return initCharacterSheet();
    default:
      throw assertNever(action);
  }
};

export const CharacterSheetProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(csReducer, initCharacterSheet());
  return <CharacterSheetContext.Provider value={[state, dispatch]}>{children}</CharacterSheetContext.Provider>;
};
