import { Flex, 
  Text, 
  Button, 
  Box, 
  HStack, 
  Container, 
  Spacer, 
  Grid, 
  VStack, 
  Center,
  SkeletonText,
  Skeleton,
  Spinner
} from '@chakra-ui/react'

export const DashboardCard = (props) => {

  const { title, value } = props

  return (
    <Box 
    w='100%' 
    borderWidth='5px' 
    borderRadius='0' 
    borderColor='brand.lightGrey'
    overflow='hidden'
    
    >

      <Box
      m="2"
      color='white'
      fontWeight="black"
      fontSize="14px"
      textTransform="uppercase"
      letterSpacing='1px'
      >
        {
          title ? 
          title : 
          '0'
        }
      </Box>

      <Box
      m='6'
      color='white'
      fontWeight="black"
      fontSize="42px"
      textTransform="uppercase"
      letterSpacing='1px'
      textAlign="center"
      >
        { 
          value ?
          value : 
          '0'
        }
      </Box>

    </Box>
  )

}