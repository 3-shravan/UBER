import { createContext, useState, useEffect } from "react";
export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState({
    fullname: {
      firstname: "",
      lastname: "",
    },
    email: "",
    password: "",
    vehicle: {
      vehicleNo: "",
      vehicleType: "",
      vehicleCapacity: "",
      vehicleColor: "",
    },
  });

  // useEffect(() => {
  //   console.log(captain);
  // }, [captain]);

  return (
    <CaptainDataContext.Provider value={[captain, setCaptain]}>
      {children}
    </CaptainDataContext.Provider>
  );
};

export default CaptainContext;
