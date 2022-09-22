import { utils, constants, BigNumber } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import { useCall, useEthers } from "@usedapp/core";
import collection from "../contracts/LadyLilethCollection.json"
import networkMapping from "../contracts/map.json"
import { useState } from 'react';


export const useOwnerOfNft = (props) => {

    const { account, chainId } = useEthers()

    const ERC721Interface = new utils.Interface(collection.abi)

    const collectionAddress = "0x0f1334C85274536dbfB7A21117f53487f755F6bb"

    const collectionContract = new Contract(collectionAddress, ERC721Interface)

    const { value, error } = 
    useCall(account && {
        contract: collectionContract,
        method: 'ownerOf',
        args: [props]
    }, {}) ?? {}

    if(error) {
      console.error(error.message)
      return undefined
    }

   return value?.[0]

 }