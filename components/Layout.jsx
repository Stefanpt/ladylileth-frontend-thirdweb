import Header from './Header'
import Footer from './Footer'
import { Flex, Box, Center } from '@chakra-ui/react'
import Sidebar from './Sidebar'

export function Layout({ children }) {
  return (
    <>
      <Header />
      <Flex>
        <Sidebar />
        <Flex h="90vh" w='100%' bg='brand.darkGrey'>
          {children}
        </Flex>
      </Flex>
    </>
  )
}

export default Layout