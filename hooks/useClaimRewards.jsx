import { utils, constants, BigNumber } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import { useCall, useEthers, useContractFunction } from "@usedapp/core";
import staking from "../contracts/ViseCoinStaking.json"
import networkMapping from "../contracts/map.json"
import { useState } from 'react';


export const useClaimRewards = (props) => {

    const { chainId, Rinkeby} = useEthers()

    const ERC721Interface = new utils.Interface(staking.abi)

    // const stakingAddress = chainId ? networkMapping[String(chainId)]["Staking"][0] : constants.AddressZero
    const stakingAddress = "0xB37D1f7EeEd59055C6d8F22E6Ec321cf85Be930D"

    const stakingContract = new Contract(stakingAddress, ERC721Interface)

    const { state, send } = useContractFunction(stakingContract, 'claimRewards',{})

    const withDrawRewards = () => {
     send()
    }

   return {state, withDrawRewards}

 }