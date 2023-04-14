import React, {useState, createContext, FC} from 'react';
interface IUserAuthContext {
  user: any;
  setUser: any;
}

export const UserAuthContext = createContext<IUserAuthContext>({
  user: null,
  setUser: () => {},
});

// export const AuthProvider: FC = ({children}: any) => {
//   const [user, setUser] = useState(null);

//   return (
//     <AuthContext.Provider value={{user, setUser}}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
