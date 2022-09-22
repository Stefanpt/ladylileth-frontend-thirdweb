import React, { useState, useEffect } from 'react'
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading,
    Center,
    Input,
    Button,
    ButtonGroup,
    VStack,
    StackDivider,
    Box,
    extendTheme,
    HStack,
    Image
} from '@chakra-ui/react'
import {
    FiMenu,
    FiHome,
    FiCalendar,
    FiUser,
    FiDollarSign,
    FiBriefcase,
    FiSettings
} from 'react-icons/fi'
import { IoPawOutline } from 'react-icons/io5'
import NavItem from './NavItem'
import Link from 'next/link'
// import { useTokenBalance } from '../hooks/useTokenBalance'
import { 
    useContract, 
    useContractRead, 
    useContractWrite,
    useAddress, 
    useTokenBalance,
    useOwnedNFTs,
    useNFTs, 
    ThirdwebNftMedia,
    getContractFromAbi
} from "@thirdweb-dev/react";
import token from '../contracts/ViseCoin.json'


export default function Sidebar() {

    // FROM HERE IM EXPERIMENTING AND TRYING TO GET AN INTERACTION WITH THE CONTRACT
    const sdk = useSDK();

    const contract = sdk.get_contract(
        "0x5d6c64d462945B0E17415e37F3CbCe5e42A60Fb5"
    );
    
    const balance = () => {
        console.log(contract?.call("balance"));
    }
    balance()
    useEffect(() => {
        console.log(contract)
    }, [contract]);
    useEffect(() => {
        console.log('contract data:',data)
    }, [data]);
    useEffect(() => {
        console.log('loading:',isLoading)
    }, [isLoading]);
    useEffect(() => {
        console.log('error:',error)
    }, [error]);
    // ---------

    
    


    const [navSize, changeNavSize] = useState("large")

    return (
        <Flex
            pos="sticky"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            w={navSize == "small" ? "75px" : "235px"}
            flexDir="column"
            justifyContent="space-between"
            bg="black"
            color="white"
        >
            <Flex
                p="12%"
                flexDir="column"
                w="100%"
                alignItems="center"
                as="nav"

            >

                <Divider/>
                <VStack
                    mt={12}
                    spacing={6}
                    align='stretch'
                >
                    <Link href="/dashboard">
                        <Button variant='menu' >Dashboard</Button>
                    </Link>
                    <Link href="/wallet">
                        <Button variant='menu' >Wallet</Button>
                    </Link>
                    <Link href="/staking">
                        <Button variant='menu' >Staking Pools</Button>
                    </Link>
                    <Link href="/faq">
                        <Button variant='menu' >FAQs</Button>
                    </Link>
                    <Link href="/nft-guide">
                        <Button variant='menu' >Nft Guide</Button>
                    </Link>
                </VStack>
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                // alignItems={navSize == "small" ? "center" : "flex-start"}
                alignItems="center"
                mb={4}
            >
                <Divider display={navSize == "small" ? "none" : "flex"} />
                <Flex mt={4} mb={4} align="center" w='100%' justifyContent="space-around">
                    <Text variant="power" align="center">VI$E</Text>
                    {/* <Text variant="power" align="center">{tokenBalance ? tokenBalance.toNumber():null}</Text> */}
                </Flex>
                <Divider display={navSize == "small" ? "none" : "flex"} />
                <HStack mt="5">
                    <Text variant="power" align="center">Powered by</Text>
                    <Flex >
                        <Image mt="0.5" src='/poweredby.png' alt='Graceland' width="75px" height="auto" />
                    </Flex>
                </HStack>
            </Flex>
        </Flex>
    )
}