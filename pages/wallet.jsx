import { Heading, Center, Tooltip, Flex, Text, Button, Box, Grid, GridItem, SimpleGrid, useDisclosure, Icon, background } from '@chakra-ui/react'
import Head from 'next/head'
import { useLadyLilethIds } from '../hooks/useLadyLilethIds'
import { useStakedLadyLilethIds } from '../hooks/useStakedLadyLilethIds'
import { useGenesisBoulevardIds } from '../hooks/useGenesisBoulevardIds'
import { utils, constants, BigNumber } from 'ethers'
import { Nft } from '../components/Nft'
import { useEthers } from '@usedapp/core'
import { useEffect } from 'react'


export function Index() {

  const LadyLilethIds = useLadyLilethIds()

  const stakedLadyLilethIds = useStakedLadyLilethIds()
  const genesisBoulevardIds = useGenesisBoulevardIds()

  const { account, activateBrowserWallet, deactivate, chainId } = useEthers()

  const { isOpen, onOpen, onClose, error } = useDisclosure()

  const isConnected = account !== undefined

  const changenetwork = async () => {
    if(chainId !== Goerli.chainId) {
      await switchNetwork(Goerli.chainId)
    }
  }
  
  if(error){
    changenetwork()
    return (
      <Center w="100%">
        <Heading size="2xl" textAlign="center" color='white'>Please change the network</Heading>
      </Center>
    )
  }

  if(!isConnected){
    return (
      <Center w="100%">
        <Heading size="2xl" textAlign="center" color='white'>Please log in</Heading>
      </Center>
    )
  }
  
  return (
    <Flex
      flexDirection='column'
      w="100%"
      mx='5'
    > 
      <Head>
        <title>Wallet | Lady LilETH</title>
      </Head>

      <Heading textTransform="uppercase" size="md" m={8} color='white'>
        My Wallet
      </Heading>

      <SimpleGrid columns={4} spacing={10} m="10" alignSelf="center">
        {
          LadyLilethIds && LadyLilethIds.map(id => 
            <Box key={id}>
              <Nft id={id}/>∫
            </Box>
          )
        }
        {
          stakedLadyLilethIds && stakedLadyLilethIds.map(id => 
            <Box key={id}>
              <Nft id={id} staked="true"/>
            </Box>
          )
        }
        {
          genesisBoulevardIds && genesisBoulevardIds.map(id => 
            <Box key={id}>
              <Nft id={id} stakingAllowed="false" />
            </Box>
          )
        }
      </SimpleGrid>
        
    </Flex>
  )


}

export default Index;