import { 
  Flex, 
  Text, 
  Button, 
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Center,
  Grid,
  GridItem,
  Box,
  useToast,
  Heading,
  Image,
  Link
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { Config, DAppProvider, Mainnet, useEtherBalance, useEthers, Rinkeby, Goerli } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'
import { formatEther } from '@ethersproject/units'
import { StakingCard } from '../components/StakingCard'
import { useLadyLilethIds } from '../hooks/useLadyLilethIds'
import { useStakedLadyLilethIds } from '../hooks/useStakedLadyLilethIds'
import pools from '../stakingPools.json'
import { useStakeNft } from '../hooks/useStakeNft'
import { useWithdrawNft } from '../hooks/useWithdrawNft'
import { useNftApproval } from '../hooks/useNftApproval'
import { useSignNftApproval } from '../hooks/useSignNftApproval'


export function Index() {

  const { account, activateBrowserWallet, deactivate, error, chainId, switchNetwork } = useEthers()

  const isConnected = account !== undefined

  // Hooks
  const { isOpen, onOpen, onClose } = useDisclosure()
  const ladyLilethIds = useLadyLilethIds()
  const stakedLadyLilethIds = useStakedLadyLilethIds()
  const {state, stake} = useStakeNft();
  const Nftapproved = useNftApproval();
  const {state: approvalState, approve} = useSignNftApproval();
  const {withdrawstate, withdraw} = useWithdrawNft();
  const toast = useToast()

  // States
  const [id, setId]=useState('');
  const [modalInfo, setModalInfo]=useState({});
  const [stakeIds, setStakeIds]=useState([]);
  const [withdrawIds, setWithdrawIds]=useState([]);
  const [approved, setApproved]=useState(false);
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);

  // Refs
  const ref = useRef()

  // Functions
  const handleStakeIdChange = event => {
    setId(event.target.value);
    console.log('value is:', event.target.value);
  };

  const handleWithdrawIdChange = event => {
    setId(event.target.value);
    console.log('value is:', event.target.value);
  };

  const handleStake = event => {
    console.log('handleClick 👉️', id);
    if(approved === false){
      alert('You first need to approve staking')
    }
    stake(id)
    setId('')
  };

  const handleWithdraw = event => {
    console.log('handleClick 👉️', id);
    withdraw(id)
    setId('')
  };

  const handlePoolClick = (props) => {
    if(props == 'sauna'){
      setModalInfo(pools.Sauna)
      setStakeIds(ladyLilethIds)
      setWithdrawIds(stakedLadyLilethIds)
      onOpen()
    }
    if(props == 'pool'){
      setModalInfo(pools.Pool)
      onOpen()
    }
    if(props == 'steam'){
      setModalInfo(pools.Steam_Room)
      onOpen()
    }
  }
  
  const handleModalClose = () => {
    setModalInfo({})
    setStakeIds([])
    setWithdrawIds([])
    onClose()
  }

  // const handleImageSize = () => {
  //   setImageWidth(ref.current.naturalWidth);
  //   setImageHeight(ref.current.naturalHeight);
  // };

  // Toast for Staking
  // useEffect(() => {
  //   if(state.status == 'Error'){
  //     toast({
  //       title: "Staking Status",
  //       description: state.status,
  //       status: "error",
  //       duration: 5000,
  //       isClosable: true
  //     });
  //   }
  //   if(state.status == 'Success'){
  //     toast({
  //       title: "Staking Status",
  //       description: state.status,
  //       status: "success",
  //       duration: 5000,
  //       isClosable: true
  //     });
  //   }
  // }, [state, toast]);

  // useEffect(() => {
  //   if(withdrawstate.status == 'Error'){
  //     toast({
  //       title: "Staking Status",
  //       description: withdrawstate.status,
  //       status: "error",
  //       duration: 5000,
  //       isClosable: true
  //     });
  //   }
  //   if(withdrawstate.status == 'Success'){
  //     toast({
  //       title: "Staking Status",
  //       description: withdrawstate.status,
  //       status: "success",
  //       duration: 5000,
  //       isClosable: true
  //     });
  //   }
  // }, [withdrawstate, toast]);

  useEffect(() => {
    if(Nftapproved === true) {
      setApproved(true)
    }
    console.log('staking approved', Nftapproved);
  }, [Nftapproved]);

  useEffect(() => {
    console.log('approval status: ',approvalState.status);
  }, [approvalState]);

  useEffect(() => {
    console.log('status: ',state.status);
  }, [state]);

  // useEffect(() => {
  //   console.log(imageWidth);
  //   console.log(imageHeight);
  // }, [imageWidth, imageHeight]);

  
  // useEffect(() => {
  //   function handleResize() {
  //     console.log('resized to: ', ref.current.naturalWidth, 'x', ref.current.naturalHeight)
  //   }

  //   window.addEventListener('resize', handleResize)
  // })

  const changenetwork = async () => {
    if(chainId !== Goerli.chainId) {
      await switchNetwork(Goerli.chainId)
    }
  }

  useEffect(() => {
    console.log('withdraw Ids', stakedLadyLilethIds);
  }, [stakedLadyLilethIds]);
  
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
    <>  

      <Head>
        <title>Staking Pools | Lady LilETH</title>
      </Head>
      
      <Flex 
      flexDirection='column'
      w="100%"
      bg='brand.lightGrey'
      // backgroundImage="/staking_background_2.png"
      // backgroundSize="contain"
      // backgroundPosition="center"
      // backgroundRepeat="no-repeat"
      >

        <Box>
          <Image
            // onLoad={() => handleImageSize()}
            // ref={ref}
            src='/staking_background_2.png'
            alt=""
            // width='100%'
            layout="fill"
            objectFit="contain"
            useMap='#image-map'
          />
          <Button 
            variant="menu"
            borderRadius="50"
            color="brand.green"
            onClick={()=>handlePoolClick('sauna')}
            style={{ 
              display:'block', 
              position:'absolute', 
              top: '42%', 
              left: '21%', 
              
            }}
            >
              The Sauna
          </Button> 
          {/* <Button 
            bg="white"
            color="black"
            variant="primary"
            onClick={()=>handlePoolClick('pool')}
            >
              The Pool
          </Button>
          <Button 
            bg="white"
            color="black"
            variant="primary"
            onClick={()=>handlePoolClick('steam')}
            >
              The Steam Room
          </Button> */}
        </Box>

        <Modal 
        isOpen={isOpen} 
        onClose={handleModalClose} 
        size="xl" 
        isCentered
        >
          <ModalOverlay />
          <ModalContent bg="black" p={5}>
            <ModalHeader
            textAlign="center" 
            textTransform="uppercase"
            color="brand.green"
            fontSize='3xl'
            >
              Stake Lileth in {modalInfo && modalInfo.title}
            </ModalHeader>
            <ModalCloseButton color="white"/>
            <ModalBody color="white">

              <Flex flexDirection="column">

                <Center mb="6">
                  {modalInfo.description}
                </Center>

                <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                  {/* Stakeable IDs */}
                  <GridItem w='100%'>
                    <Text textTransform="uppercase">Current Stakers: </Text>
                    <Select 
                    placeholder='Select token ID'
                    onChange={handleStakeIdChange}
                    mt="2"
                    >
                      {
                        stakeIds && stakeIds.map(id => 
                          <option key={id} value={id}>{id.toNumber()}</option>
                          )
                        }
                    </Select>
                    {approved ? 
                      <Button onClick={()=>handleStake()} mt="4" variant="secondary" borderColor="brand.green" color="brand.green" w="100%">
                        Stake
                      </Button>
                      :
                      <Button onClick={()=>approve()} mt="4" variant="secondary" borderColor="brand.green" color="brand.green" w="100%">
                        Approve
                      </Button>
                    }
                  </GridItem>

                  {/* Withdrawable IDs */}
                  <GridItem w='100%'>
                    <Text textTransform="uppercase">Reward: {modalInfo.reward}</Text>
                    <Select 
                    placeholder='Select token ID'
                    onChange={handleWithdrawIdChange}
                    mt="2"
                    >
                      {
                        withdrawIds && withdrawIds.map(id => 
                          <option key={id} value={id}>{id.toNumber()}</option>
                        )
                      }
                    </Select>
                    <Button onClick={()=>handleWithdraw()} mt="4" variant="secondary" borderColor="brand.pink" color="brand.pink" w="100%">
                      Unstake
                    </Button>
                  </GridItem>
                </Grid>

              </Flex>

            </ModalBody>
  
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>

      </Flex>

    </>
  )


}

export default Index;