import { utils, constants, BigNumber } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import token from "../contracts/ViseCoin.json"
import networkMapping from "../contracts/map.json"
import { useState } from 'react';


export const useTokenBalance = () => {

    const ERC721Interface = new utils.Interface(token.abi)

    const tokenAddress = "0x5d6c64d462945B0E17415e37F3CbCe5e42A60Fb5"

    const tokenContract = new Contract(tokenAddress, ERC721Interface)

    const { value, error } = 
    useCall(account && {
        contract: tokenContract,
        method: 'balanceOf',
        args: [account]
    }, {}) ?? {}

    if(error) {
      console.error('Token Balance Error', error.message)
      return undefined
    }

   return value?.[0]

 }