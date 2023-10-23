import { Box, Button, Flex, Icon, Show, Text } from '@chakra-ui/react';
import { Link } from '@remix-run/react';
import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa';
import Typewriter from './TypeWritter';

const Home = () => {
  return (
    <Box
      as='section'
      height='100vh'
      backgroundImage={`url("/img/home.webp")`}
      backgroundSize='cover'
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
    >
      <Box
        position='absolute'
        top='0'
        left='0'
        height='100vh'
        width='100%'
        backgroundColor='#00000080'
      />
      <Box
        color='white'
        position='absolute'
        bottom={{ base: '28', md: 20 }}
        right={{ base: 0, md: 20, lg: 10 }}
        width={{ base: '100%', md: '50%' }}
        textAlign={'center'}
        lineHeight='normal'
      >
        <Text fontSize={{ base: '30px', md: '50px' }}>¡Hola, mundo!</Text>
        <Text fontSize={{ base: '50px', md: '70px' }}>Soy Ricardo Meneses</Text>
        <Text fontSize={{ base: '30px', md: '50px' }}>Desarrollador Full Stack</Text>

        <Typewriter
          words={['Frontend', 'Backend', 'React-Native']}
          delay={200}
          infinite
          style={{
            fontSize: { base: '30px', md: '40px' },
          }}
        />
        <Button
          color='white'
          fontWeight='bold'
          borderRadius='full'
          borderWidth={2}
          borderColor={'#26a0da'}
          bg='transparent'
          transition={'all 0.3s ease'}
          _hover={{
            bgGradient: 'linear(to-l, #314755 0%, #26a0da  51%, #314755  100%)',
            transform: 'translateY(-5px)',
            boxShadow: '1px 2em 2em 0em #26a0da',
          }}
          fontSize='20px'
          mt={4}
          rightIcon={<FaFilePdf />}
        >
          Descargar CV
        </Button>
      </Box>
      <Flex
        color='white'
        position='relative'
        flexDirection={{ base: 'row', md: 'column' }}
        h={'100%'}
        justifyContent='center'
        paddingLeft={{ base: 0, md: 10 }}
        paddingBottom={{ base: 10, md: 0 }}
        gap={5}
        w={{ base: 'auto', md: 'fit-content' }}
        alignItems={{ base: 'flex-end', md: 'center' }}
      >
        <Show above='md'>
          <Box flex={1} borderLeft={'1px solid #fff'} mt={20} position='relative'>
            <Box
              h={'8px'}
              w={'8px'}
              bg='white'
              position='absolute'
              bottom={0}
              left='-5px'
              transform='rotate(45deg)'
            />
          </Box>
        </Show>
        <Link to='/'>
          <Icon as={FaGithub} fontSize={'30px'} />
        </Link>
        <Link to=''>
          <Icon as={FaLinkedin} fontSize={'30px'} />
        </Link>
        <Show above='md'>
          <Box flex={1} borderLeft={'1px solid #fff'} mb={20} position='relative'>
            <Box
              h={'8px'}
              w={'8px'}
              bg='white'
              position='absolute'
              top={0}
              left='-5px'
              transform='rotate(45deg)'
            />
          </Box>
        </Show>
      </Flex>
    </Box>
  );
};

export default Home;
