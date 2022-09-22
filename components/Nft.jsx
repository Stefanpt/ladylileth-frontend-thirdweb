import { HStack, Flex, Text, Button, Box, Spinner, Center, useToast, useDimensions } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from './Layout'
import { useNftUri } from '../hooks/useNftUri'
import { useNftMetadata } from '../hooks/useNftMetadata'
import { useNftImage } from '../hooks/useNftImage'
import Image from 'next/image';
import { sendError } from 'next/dist/server/api-utils'
import { useStakeNft } from '../hooks/useStakeNft'
import { useWithdrawNft } from '../hooks/useWithdrawNft'
import { useOwnerOfNft } from '../hooks/useOwnerOfNft'
import { StakingCard } from './StakingCard' 



export const Nft = (props) => {

  // States
  const [nftMeta, setNftMeta] = useState({});
  const [src, setSrc] = useState(null);
  const [stakeable, setStakeable] = useState(true);
  // Hooks
  const {state, stake} = useStakeNft();
  const {withdrawstate, withdraw} = useWithdrawNft();
  const ownerOfNft = useOwnerOfNft(props.id)
  const NftUri = useNftUri(props)
  const [result, loading] = useNftMetadata(NftUri);
  const {imageResult, imageLoading} = useNftImage(result);
  // Imports
  const toast = useToast()
  const router = useRouter()
  // Refs

  
  // Functions
  const handleStake = () => {
    alert('pressed stake')
  }
  
  const handleWithdraw = () => {
    withdraw(props.id)
  }

  // SideEffects
  useEffect(() => {
    setSrc(imageResult)
  }, [imageResult]);

  useEffect(() => {
    setStakeable(props.stakingAllowed)
  }, [props.stakingAllowed]);

  
  // useEffect(() => {
  //   toast({
  //     title: 'Transaction Status',
  //     status: withdrawstate && withdrawstate.status,
  //     duration: 9000,
  //     isClosable: true,
  //   })
  // }, [withdrawstate]);

  // useEffect(() => {
  //   if(state.status == success){
  //     toast({
  //       title: 'Transaction Status',
  //       status: state.status,
  //       duration: 9000,
  //       isClosable: true,
  //     })
  //   }
  // }, [state]);

  const imgLoader = () => {
    return `/loading.png`
  }

  return (
    <Flex>

      {loading ? 
        (
          <Center>
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='transparent'
              color='brand.green'
              size='xl'
            />
          </Center> 
        ) : 
        (
          <Flex flexDirection="column" alignContent="center">

            <HStack justifyContent="space-between" zIndex="1" mx="2">
              <Text fontWeight="black" fontSize='xs' color="white">{result.edition && "#"+result.edition.replace("/10000", "")}</Text>
              {props.staked ?
                (<Text fontWeight="black" textTransform="uppercase" fontSize='xs' color="white">staked</Text>)
                : null
              }
            </HStack>

            {imageLoading ? 
              ("loading..."):
              (
                <>
                <Box mt="-4">
                  <Image
                  alt='NFT'
                  loader={imgLoader}
                  src={src ? src : "/loading.png"}
                  placeholder="blur"
                  blurDataURL="/loading.png"
                  onError={() => setSrc('/oops.png')}
                  width={250}
                  height={250}
                  />
                </Box>
            

                <Text mt="-7" zIndex="1" bg="blackAlpha.700" fontSize='sm' textAlign="center" textTransform="uppercase" color="white">
                  {
                    result ? 
                    result.collection :
                    <p>...</p>
                  }
                </Text>
 
                  {props.staked ?
                    <Button mt="3" h="1.8rem" w="100%" variant="secondary" borderColor="brand.pink" color="brand.pink" onClick={handleWithdraw}>Unstake</Button>
                    :
                    <Button disabled={stakeable} mt="3" h="1.8rem" w="100%" variant="secondary" onClick={() => router.push('/staking')}>
                      {stakeable ?
                        "Unstakable"
                        : 
                        "Stake" 
                      }
                    </Button>
                  }
           
              </>
            )}

          </Flex>
        )
      }

    </Flex>
  )

}