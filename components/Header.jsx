import { Button, Center, Flex, Text, Image, Box, HStack } from "@chakra-ui/react"
import { formatEther } from '@ethersproject/units'
import { FaEthereum } from 'react-icons/fa'
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";


export function Header() {

    const address = useAddress();
    
    return (

        <header>
            <Flex h="10vh" py="6" justifyContent="space-between" bg="black" color="white" width="100vw">
                <Center w='235px'>
                    <Box>
                        <Image src='/logo.png' alt='Lady Lileth' width="auto" height="65px" />
                    </Box>    
                </Center>

                <ConnectWallet />
            </Flex>
        </header>


    )


}

export default Header;