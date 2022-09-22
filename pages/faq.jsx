import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Box,
  Container,
  Center,
  Heading,
  Flex
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

export function Index() {

  const accordionButton = {
    bg: 'brand.lightGrey',
    // flex:'1',
    textAlign:'left',
    color:'brand.pink',
    textTransform:'uppercase',
    // mb: 5,
    border: 'none',
    _expanded: {
      color:'brand.green',
    }
  }

  const accordionPanel = {
    mb: 5,
    color:"brand.green",
    bg: 'brand.lightGrey',
    mt: 0.5,
    _expanded: {
      color:'brand.green',
    }
  }

  const accordionItem = {
    borderTop:'none',
    borderBottom: 'none',
    mt: 4
  }

  const h2 = {
    // borderColor: 'unset'
  }

  return (
    <Flex
      flexDirection='column'
      w='100%'
      mx='5'
    >

      <Head>
        <title>FAQ | Lady LilETH</title>
      </Head>

      <Heading textTransform="uppercase" size="md" m={8} color='white'>
        FAQs
      </Heading>

      <Accordion w={{base: '100%', md: '90%', lg:'90%', xl:'75%' }} px='2%' pt="6%" alignSelf="center">
        <AccordionItem sx={accordionItem}>
          <h2>
            <AccordionButton sx={accordionButton}>
              <Box>
                WHAT ARE THE DIFFERENCES BETWEEN THE STAKING POOLS?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel sx={accordionPanel}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem sx={accordionItem}>
          <h2>
            <AccordionButton sx={accordionButton}>
              <Box>
                what is vi$e coin?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel sx={accordionPanel}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem sx={accordionItem}>
          <h2>
            <AccordionButton sx={accordionButton}>
              <Box>
                how often can i claim?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel sx={accordionPanel}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem sx={accordionItem}>
          <h2>
            <AccordionButton sx={accordionButton}>
              <Box>
                how do i stake my nft?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel sx={accordionPanel}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem sx={accordionItem}>
          <h2>
            <AccordionButton sx={accordionButton}>
              <Box>
                can i stake my mansion?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel sx={accordionPanel}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem sx={accordionItem}>
          <h2>
            <AccordionButton sx={accordionButton}>
              <Box>
                are there any risks?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel sx={accordionPanel}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

    </Flex>
  )


}

export default Index;