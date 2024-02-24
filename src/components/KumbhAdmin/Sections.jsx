import React from 'react'
import {Center,Card,Image,Text } from '@chakra-ui/react'
export default function Sections() {
  return (
    <Center m={4} display={'flex'} flexWrap={'wrap'} gap={4}>
    <Card
    direction={['column','column','column','row']}
    width={['67%','37%','27%','25%']}
    overflow='hidden'
    variant='outline'
    alignItems={'center'}
    gap={3}
    cursor={'pointer'}
    boxShadow='dark-lg'
    _hover={{ transform: 'scale(1.02)' }}
    transition="transform 0.3s ease-in-out"
  >
    <Image
      objectFit='cover'
       w={'100px'}
       h={'100px'}
      src='./assets/project.png'
      alt='project'
    />
        <Text  as="h2"
          fontFamily="Georgia, serif"
          fontSize={20}
          fontWeight="bold"
          color={'#4169E1'}
          textAlign={'center'}
          >About Kumbh</Text>
  </Card>
    <Card
    direction={['column','column','column','row']}
    width={['67%','37%','27%','25%']}
    overflow='hidden'
    variant='outline'
    alignItems={'center'}
    gap={3}
    cursor={'pointer'}
    boxShadow='dark-lg'
    _hover={{ transform: 'scale(1.02)' }}
    transition="transform 0.3s ease-in-out"
  >
    <Image
      objectFit='cover'
       w={'100px'}
       h={'100px'}
      src='./assets/project.png'
      alt='project'
    />
        <Text  as="h2"
          fontFamily="Georgia, serif"
          fontSize={20}
          fontWeight="bold"
          color={'#4169E1'}
          textAlign={'center'}
          >About Us</Text>
  </Card>
    <Card
    direction={['column','column','column','row']}
    width={['67%','37%','27%','25%']}
    overflow='hidden'
    variant='outline'
    alignItems={'center'}
    gap={3}
    cursor={'pointer'}
    boxShadow='dark-lg'
    _hover={{ transform: 'scale(1.02)' }}
    transition="transform 0.3s ease-in-out"
  >
    <Image
      objectFit='cover'
       w={'100px'}
       h={'100px'}
      src='./assets/project.png'
      alt='project'
    />
        <Text  as="h2"
          fontFamily="Georgia, serif"
          fontSize={20}
          fontWeight="bold"
          color={'#4169E1'}
          textAlign={'center'}
          >Kumbh Packages</Text>
  </Card>
    <Card
    direction={['column','column','column','row']}
    width={['67%','37%','27%','25%']}
    overflow='hidden'
    variant='outline'
    alignItems={'center'}
    gap={3}
    cursor={'pointer'}
    boxShadow='dark-lg'
    _hover={{ transform: 'scale(1.02)' }}
    transition="transform 0.3s ease-in-out"
  >
    <Image
      objectFit='cover'
       w={'100px'}
       h={'100px'}
      src='./assets/project.png'
      alt='project'
    />
        <Text  as="h2"
          fontFamily="Georgia, serif"
          fontSize={20}
          fontWeight="bold"
          color={'#4169E1'}
          textAlign={'center'}
          >Kumbh Accommodations</Text>
  </Card>
    <Card
    direction={['column','column','column','row']}
    width={['67%','37%','27%','25%']}
    overflow='hidden'
    variant='outline'
    alignItems={'center'}
    gap={3}
    cursor={'pointer'}
    boxShadow='dark-lg'
    _hover={{ transform: 'scale(1.02)' }}
    transition="transform 0.3s ease-in-out"
  >
    <Image
      objectFit='cover'
       w={'100px'}
       h={'100px'}
      src='./assets/project.png'
      alt='project'
    />
        <Text  as="h2"
          fontFamily="Georgia, serif"
          fontSize={20}
          fontWeight="bold"
          color={'#4169E1'}
          textAlign={'center'}
          >Others</Text>
  </Card>
  
  </Center>
  )
}
