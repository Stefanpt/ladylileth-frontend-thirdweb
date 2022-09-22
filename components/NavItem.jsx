import React from 'react'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
    MenuList
} from '@chakra-ui/react'
import NavHoverBox from './NavHoverBox'

export default function NavItem({ icon, title, description, active, navSize }) {
    return (
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={navSize == "small" ? "center" : "flex-start"}
        >
            <Menu placement="right">
                <Link
                    backgroundColor='brand.lightGrey'
                    p={3}
                    borderRadius={0}
                    _hover={{ boxShadow:'2xl' }}
                    w={navSize == "large" && "100%"}
                    color={active ? 'brand.green':'brand.pink'}
                >
                    <MenuButton w="100%">
                        <Flex>
                            <Text ml={5} display={navSize == "small" ? "none" : "flex"} casing='uppercase'>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
                <MenuList
                    py={0}
                    border="1px solid white"
                    w={200}
                    h={200}
                    ml={5}
                >
                    <NavHoverBox title={title} icon={icon} description={description} />
                </MenuList>
            </Menu>
        </Flex>
    )
}