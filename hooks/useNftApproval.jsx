import { utils, constants, BigNumber } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import { useCall, useEthers } from "@usedapp/core";
import collection from "../contracts/LadyLilethCollection.json"
import networkMapping from "../contracts/map.json"
import { useState } from 'react';


export const useNftApproval = () => {

    const { account, chainId } = useEthers()

    // const [approved, setApproved] = useState(null);
    // const [loading, setLoading] = useState();

    const ERC721Interface = new utils.Interface(collection.abi)

    const collectionAddress = "0x0f1334C85274536dbfB7A21117f53487f755F6bb"

    const stakingAddress = "0xB37D1f7EeEd59055C6d8F22E6Ec321cf85Be930D"

    const collectionContract = new Contract(collectionAddress, ERC721Interface)

    const { value, error } = 
    useCall(account && {
        contract: collectionContract,
        method: 'isApprovedForAll',
        args: [account, stakingAddress]
    }) ?? {}

    if(error) {
      console.error(error.message)
      return error
    }

   return value?.[0]

 }