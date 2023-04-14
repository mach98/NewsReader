import {createContext} from 'react';

type AppContextType = {
  userName: string;
  userAvatar: string;
};

const AppContext = createContext<AppContextType>({});
