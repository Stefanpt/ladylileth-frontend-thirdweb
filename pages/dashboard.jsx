import { Flex, Text, Button, Box, HStack, Container, Spacer, Grid, VStack, Center, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Head from 'next/head'
import { DashboardCard } from '../components/DashboardCard'
import { 
  ChainId, 
  useEthers,
  Rinkeby,
  Goerli
} from '@usedapp/core'
import { useStakingUserInfo } from '../hooks/useStakingUserInfo'
import { useTokenBalance } from '../hooks/useTokenBalance'
import { useClaimRewards } from '../hooks/useClaimRewards'


const PoolCard = {
  bg: "brand.lightGrey",
  color: "brand.pink",
  textTransform: "uppercase",
}

const Dashboard = () => {
  
  const { account, activateBrowserWallet, deactivate, chainId, switchNetwork, error } = useEthers()
  const {state, withDrawRewards} = useClaimRewards();
  const userStakedInfo = useStakingUserInfo();
  const tokenBalance = useTokenBalance();

  const isConnected = account !== undefined

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

  
  
  const handleClick = () => {
    // setDisabled(true)
    withDrawRewards()
  }

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
    w='100%'
    mx='5'
    >

      <Head>
        <title>Dashboard | Lady LilETH</title>
      </Head>

      <Heading textTransform="uppercase" size="md" m={8} color='white'>
        My Dashboard
      </Heading>
      
      <HStack justifyContent='center' alignContent="flex-start">

        <Flex>
          <Box w='280px'>
            <VStack>
              <Box sx={PoolCard} w='100%'>
                <Text p={2} fontWeight="black" align='center'>the sauna</Text>
              </Box>
              {/* <DashboardCard title='Nfts staked' value={userStakedInfo ? userStakedInfo[0].toNumber():null} /> */}
              {/* <DashboardCard title='days staked' value={userStakedInfo ? userStakedInfo[1].toNumber():null} /> */}
              <DashboardCard title="won" value={tokenBalance ? tokenBalance.toNumber():null} /> {/* //! This is ok */}
            </VStack>
          </Box>
          <Spacer />
        </Flex>

        {/* <Flex>
          <Box w='280px'>
            <VStack>
              <Box sx={PoolCard} w='100%'>
                <Text p={2} fontWeight="black" align='center'>steam room</Text>
              </Box>
              <DashboardCard title='Nfts staked' value={userStakedInfo && userStakedInfo[0].toNumber()} />
              <DashboardCard title='days staked' value={userStakedInfo && userStakedInfo[1].toNumber()} />
              <DashboardCard title="won" value={userTokenBalance && userTokenBalance.toNumber()} />
            </VStack>
          </Box>
          <Spacer />
        </Flex> */}

        {/* <Flex>
          <Box w='280px'>
            <VStack>
              <Box sx={PoolCard} w='100%'>
                <Text p={2} fontWeight="black" align='center'>the pool</Text>
              </Box>
              <DashboardCard title='Nfts staked' value={userStakedInfo && userStakedInfo[0].toNumber()} />
              <DashboardCard title='claimable' value={userStakedInfo && userStakedInfo[1].toNumber()} />
              <Button
                w='100%'
                height="3.5em"
                bg="brand.pink"
                borderRadius='0'
                color='white'
                textTransform='uppercase'
                fontSize='42px'
                onClick={handleClick}
                fontWeight="black"
              >
                claim
              </Button>
            </VStack>
          </Box>
          <Spacer />
        </Flex> */}
      
      </HStack>


    </Flex>
  )


}

export default Dashboard;