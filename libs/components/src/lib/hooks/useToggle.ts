import * as React from 'react';

export const useToggle = (initialValue = false) => React.useReducer(reducer, initialValue);

const reducer = (value: boolean, action: 'toggle' | 'toggleOn' | 'toggleOff') => {
  switch (action) {
    case 'toggle':
      return !value;
    case 'toggleOn':
      return true;
    case 'toggleOff':
      return false;
    default:
      return value;
  }
};
