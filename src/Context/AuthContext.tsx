import {createContext} from 'react';

interface AppContextType {
  user: string | null;
}

export const AuthContext = createContext<AppContextType>({
  user: null,
});
