import { createContext, useState, useEffect } from "react";

export const userDataContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    fullname: {
      firstname: "",
      lastname: "",
    },
    email: "",
    password: "",
  });

  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  return (
    <div>
      <userDataContext.Provider value={[user, setUser]}>
        {children}
      </userDataContext.Provider>
    </div>
  );
};

export default UserContext;
