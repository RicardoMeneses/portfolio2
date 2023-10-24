import { Box, Container, Heading, Text, useDisclosure } from '@chakra-ui/react';
import { MenuDrawer } from './MenuDrawer';
import { MenuLanguage } from './MenuLanguage';
import { MenuItem as MenuLanguageItem } from '@szhsin/react-menu';

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box as='header' position='fixed' w={'100%'} zIndex={10} top={0}>
        <Container maxW='6xl' display='flex' justifyContent='space-between' p={5} color='white'>
          <Heading fontFamily='Rancho, cursive'>RM</Heading>
          <MenuLanguage language='es' navbar={false}>
            <MenuLanguageItem>Español</MenuLanguageItem>
            <MenuLanguageItem>English</MenuLanguageItem>
          </MenuLanguage>
          <Box
            height='30px'
            width='40px'
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            cursor='pointer'
            transition='transform 400ms ease'
            transform={isOpen ? 'rotate(45deg)' : 'rotate(0)'}
            onClick={onOpen}
          >
            <Text
              as='span'
              w={isOpen ? '0px' : '30px'}
              height='3px'
              bg='white'
              transition='width 200ms ease'
              transitionDelay='200ms'
            ></Text>
            <Text as='span' w='40px' height='3px' bg='white' transition='width 200ms ease'></Text>
            <Text
              as='span'
              w={isOpen ? '0px' : '20px'}
              height='3px'
              bg='white'
              transition='width 200ms ease'
              transitionDelay='400ms'
            ></Text>
            <Text
              as='span'
              height={isOpen ? '40px' : '0px'}
              bg='white'
              transition='height 400ms'
              transitionDelay={isOpen ? '400ms' : '0ms'}
              position='absolute'
              top={'-5px'}
              left='50%'
              transform='translateX(-50%)'
              display='block'
              width='3px'
            ></Text>
          </Box>
        </Container>
        <MenuDrawer isOpen={isOpen} onClose={onClose} />
      </Box>
    </>
  );
};
