import { fetchNui } from '../utils/fetchNui';

export const onClothing = (type: string) => {
  fetchNui('useClothing', type);
  fetchNui('exit');
};