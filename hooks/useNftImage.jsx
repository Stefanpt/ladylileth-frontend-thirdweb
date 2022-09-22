import { utils, constants, BigNumber } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import { useCall, useEthers } from "@usedapp/core";
import collection from "../contracts/LadyLilethCollection.json"
import networkMapping from "../contracts/map.json"
import { useState, useEffect } from 'react';


export const useNftImage = (props) => {

  const [imageResult, setResult] = useState({});
  const [imageLoading, setLoading] = useState("true");

  const cleanedUrl = (url) => {
    if(url && url.startsWith("ipfs://")) {
      return url.replace("ipfs://", "https://cloudflare-ipfs.com/ipfs/")
    }
    return url
  }

  useEffect(() => {
    async function fetchImage() {
      try {
        const buildUrl = `${cleanedUrl(props.image)}/${props.edition.replace("/10000", "")}.png`
        console.log('build url: ',buildUrl);
        const response = await fetch(
            buildUrl
        );
        const json = await response.blob();
        const img = URL.createObjectURL(json);
        setResult(img)
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log('Image error: ', error);
      }
    }

    if (props.image !== "") {
      fetchImage();
    }
  }, [props]);

  return {imageResult, imageLoading};
}