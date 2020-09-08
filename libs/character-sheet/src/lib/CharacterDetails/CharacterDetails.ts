export type CharacterDetails = {
  playerName: string;
  name: string;
  deity: string;
  languages: string[];
  senses: string[];
};

export const initCharacterDetails = () => ({
  playerName: '',
  name: '',
  deity: '',
  languages: ['common'],
  senses: [],
});
