import { ComponentStyleConfig } from '@chakra-ui/theme'

export const BoxStyled = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: {
      bg: "brand.darkGrey"
    },
    accordian: {
      bg: "brand.pink",
      color: 'white'
    },
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {},
};
