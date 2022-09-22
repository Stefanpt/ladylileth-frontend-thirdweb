export const ButtonStyled = {
    // style object for base or default style
    baseStyle: {},
    // styles for different sizes ("sm", "md", "lg")
    sizes: {},
    // styles for different visual variants ("outline", "solid")
    variants: {
      primary: {
        fontFamily: "Lato",
        bg: "transparent",
        border: '1px solid',
        borderColor: 'brand.green',
        borderRadius: '50px',
        color: 'brand.green',
        fontSize: '18px',
        fontWeight: 'bold',
        letterSpacing: '2%',
        textTransform: 'capitalize',
        _hover: {
          borderColor: 'brand.pink',
          color: 'brand.pink',
        }
      },
      secondary: {
        fontFamily: "Lato",
        bg: "transparent",
        border: '2px solid',
        borderColor: 'brand.green',
        borderRadius: '50px',
        color: 'brand.green',
        fontSize: '14px',
        fontWeight: 'bold',
        letterSpacing: '7%',
        textTransform: 'uppercase',
      },
      icon: {
        fontFamily: "Lato",
        bg: "transparent",
        border: '2px solid',
        borderColor: 'brand.green',
        borderRadius: '50px',
        color: 'brand.green',
        borderWidth:"2px",
        w:"40px",
        _hover: {
          border: 'none',
          bg:"brand.green",
          transform: 'scale(1.3)',
          "& .addIcon": {
            color: "brand.darkGrey"
          }
        },
      },
      menu: {
        fontFamily: "Lato",
        bg: "brand.darkGrey",
        border: 'none',
        borderRadius: '0',
        color: 'brand.pink',
        fontSize: '14px',
        fontWeight: 'bold',
        letterSpacing: "1.2px",
        textTransform: 'uppercase',
        _hover: {
          color: 'brand.green',
        },
        _active: {
          color: 'brand.green',
        }
      }
    },
    // default values for 'size', 'variant' and 'colorScheme'
    defaultProps: {},
  }
