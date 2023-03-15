import React, { useContext, createContext } from "react";
import { useAddress, useContract, useMetamask } from "@thirdweb-dev/react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    //contract address here
  );

  const address = useAddress();
  const connect = useMetamask();

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
