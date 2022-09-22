import { utils, constants, BigNumber } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import { useCall, useEthers } from "@usedapp/core";
import staking from "../contracts/ViseCoinStaking.json"
import networkMapping from "../contracts/map.json"
import { useState } from 'react';


export const useStakedLadyLilethIds = (props) => {

    const { account, chainId } = useEthers()

    const ERC721Interface = new utils.Interface(staking.abi)

    const stakingAddress = "0xB37D1f7EeEd59055C6d8F22E6Ec321cf85Be930D"

    const stakingContract = new Contract(stakingAddress, ERC721Interface)

    const { value, error } = 
    useCall(account && {
        contract: stakingContract,
        method: 'tokenIdsStaked',
        args: [account]
    },{}) ?? {}

    if(error) {
      console.error(error.message)
      return undefined
    }

   return value?.[0]

 }