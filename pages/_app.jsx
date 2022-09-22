import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import { theme } from '../styles/theme'
import '@fontsource/lato/400.css'

import { formatEther } from '@ethersproject/units'
import { getDefaultProvider } from 'ethers'
import { 
  ChainId, 
  ThirdwebProvider
} from "@thirdweb-dev/react";


function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page)

  return getLayout (
    <ChakraProvider theme={theme}>
      <ThirdwebProvider desiredChainId={ChainId.Goerli}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThirdwebProvider>
    </ChakraProvider>
  )
}

export default MyApp
