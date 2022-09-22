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
  Flex
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

export function Index() {

  return (
    <Flex w="100%" justifyContent="center" alignItems="center" >
      <Head>
        <title>NFT GUIDE | Lady LilETH</title>
      </Head>

        <Box>
          <iframe src="https://www.slideshare.net/slideshow/embed_code/key/5Dn5z6YOyrJHbd?hostedIn=slideshare&page=upload" width="893" height="750" frameBorder="0" marginWidth="0" marginHeight="0" scrolling="no"></iframe>
        </Box>

    </Flex>
      
  )


}

export default Index;