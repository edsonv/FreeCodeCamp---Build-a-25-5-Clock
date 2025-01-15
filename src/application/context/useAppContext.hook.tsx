import { useContext } from 'react';
import { AppContext } from './appContext.context';

export const useAppContext = () => {
  const context = useContext(AppContext);

  return context;
};
