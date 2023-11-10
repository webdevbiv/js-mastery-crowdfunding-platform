import React, { createContext, useContext } from "react";

import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";

const StateContext = createContext();
const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(contractAddress);

  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    "createCampaign"
  );

  const address = useAddress();
  const connect = useMetamask();

  const publishCampaign = async (form) => {
    const newCampaign = {
      args: [
        address,
        form.title,
        form.description,
        form.target,
        form.deadline,
        form.image,
      ],
    };

    try {
      const data = await createCampaign(newCampaign);

      console.log("contract call success", data);
    } catch (error) {
      console.log("contract call failure", error);
    }
  };

  return (
    <StateContext.Provider
      value={{ address, contract, connect, createCampaign: publishCampaign }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
