import React from 'react'
import { Center,Card, Image,Text} from "@chakra-ui/react";

export default function Projects() {
  return (
    <Center m={4} display={'flex'} flexWrap={'wrap'} gap={4}>
    <Card
    direction={['column','column','column','row']}
    width={['80%','50%','40%','33%']}
    overflow='hidden'
    variant='outline'
    alignItems={'center'}
    gap={3}
  >
    <Image
      objectFit='cover'
       w={'200px'}
       h={'200px'}
      src='./assets/KumbhMelaLogo.jpeg'
      alt='Caffe Latte'
    />
        <Text  as="h2"
          fontFamily="Georgia, serif"
          fontSize={20}
          fontWeight="bold"
          color={'#4169E1'}
          textAlign={'center'}
          >The Kumbh Mela Project</Text>
  </Card>

  <Card
    direction={['column','column','column','row']}
    width={['80%','50%','40%','33%']}
    overflow='hidden'
    variant='outline'
    alignItems={'center'}
    gap={3}
  >
    <Image
      objectFit='cover'
       w={'200px'}
       h={'200px'}
      src='./assets/KumbhMelaLogo.jpeg'
      alt='Caffe Latte'
    />
        <Text  as="h2"
          fontFamily="Georgia, serif"
          fontSize={20}
          fontWeight="bold"
          color={'#4169E1'}
          textAlign={'center'}
          >Project Name</Text>
  </Card><Card
    direction={['column','column','column','row']}
    width={['80%','50%','40%','33%']}
    overflow='hidden'
    variant='outline'
    alignItems={'center'}
    gap={3}
  >
    <Image
      objectFit='cover'
       w={'200px'}
       h={'200px'}
      src='./assets/KumbhMelaLogo.jpeg'
      alt='Caffe Latte'
    />
        <Text  as="h2"
          fontFamily="Georgia, serif"
          fontSize={20}
          fontWeight="bold"
          color={'#4169E1'}
          textAlign={'center'}
          >Project Name</Text>
  </Card><Card
    direction={['column','column','column','row']}
    width={['80%','50%','40%','33%']}
    overflow='hidden'
    variant='outline'
    alignItems={'center'}
    gap={3}
  >
    <Image
      objectFit='cover'
       w={'200px'}
       h={'200px'}
      src='./assets/KumbhMelaLogo.jpeg'
      alt='Caffe Latte'
    />
        <Text  as="h2"
          fontFamily="Georgia, serif"
          fontSize={20}
          fontWeight="bold"
          color={'#4169E1'}
          textAlign={'center'}
          >Project Name</Text>
  </Card>
  </Center>
  )
}
