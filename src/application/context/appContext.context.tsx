import { Context, createContext, Dispatch } from 'react';
import { State } from '../../domain/entities/state';
import { Action } from '../../domain/entities/action';

export type AppContext = { state: State; dispatch: Dispatch<Action> };

export const AppContext = createContext<AppContext | undefined>(
  undefined
) as Context<AppContext>;
