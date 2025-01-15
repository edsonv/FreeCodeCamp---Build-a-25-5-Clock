import { ReactNode } from 'react';
import { useApp } from '../../ui/hooks/useApp.hook';
import { AppContext } from './appContext.context';

type Props = {
  children: ReactNode;
};

export const ContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useApp();

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
