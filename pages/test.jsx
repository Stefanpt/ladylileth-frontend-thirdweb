import { useContract, useNFTs, ThirdwebNftMedia } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";

export default function Home() {
  const { contract } = useContract("0x0f1334C85274536dbfB7A21117f53487f755F6bb");
  const [log, setlog] = useState();
  

  useEffect(() => {

    async function loadClaimableRewards() {
      const cr = await contract?.call("name");
      console.log("Loaded claimable rewards", cr);
      setlog(cr)
    }

    loadClaimableRewards();
  }, [contract]);

  return (
    <div>
      <h2 color="white">My NFTs</h2>
      {log}
    </div>
  );
}