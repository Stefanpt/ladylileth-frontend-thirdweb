import { utils, constants, BigNumber } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import { useCall, useEthers } from "@usedapp/core";
import collection from "../contracts/GenesisBoulevard.json"
import networkMapping from "../contracts/map.json"
import { useState } from 'react';


export const useGenesisBoulevardIds = () => {

    const { account, chainId } = useEthers()

    const ERC721Interface = new utils.Interface(collection.abi)

    const collectionAddress = "0x029500d9D5B0b3797C5D59676eF173455fc1d5bA"

    const collectionContract = new Contract(collectionAddress, ERC721Interface)

    const { value, error } = 
    useCall(account && {
        contract: collectionContract,
        method: 'tokensOfOwner',
        args: [account]
    }, {}) ?? {}

    if(error) {
      console.error(error.message)
      return undefined
    }

   return value?.[0]
   

 }