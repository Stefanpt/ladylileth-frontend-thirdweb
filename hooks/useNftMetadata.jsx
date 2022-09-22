import { utils, constants, BigNumber } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import { useCall, useEthers } from "@usedapp/core";
import collection from "../contracts/LadyLilethCollection.json"
import networkMapping from "../contracts/map.json"
import { useState, useEffect } from 'react';


export const useNftMetadata = (NftUri) => {

  const [result, setResult] = useState({});
  const [loading, setLoading] = useState("false");

  const cleanedUrl = (url) => {
    if(url.startsWith("ipfs://")) {
      return url.replace("ipfs://", "https://cloudflare-ipfs.com/ipfs/")
    }
    return url
  }

  useEffect(() => {
    async function fetchMetadataList() {
      try {
        setLoading(true);
        const response = await fetch(
          cleanedUrl(NftUri)
        );

        const json = await response.json();
        setResult(json)
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    if (NftUri !== "") {
      fetchMetadataList();
    }
  }, [NftUri]);

  return [result, loading];
}