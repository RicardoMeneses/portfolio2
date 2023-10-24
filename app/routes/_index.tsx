import { Box, Heading } from '@chakra-ui/react';
import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Header } from '~/components/Header';
import { Home } from '~/components/Home';
import stylesTransition from '@szhsin/react-menu/dist/transitions/slide.css';
import stylesMenu from '@szhsin/react-menu/dist/index.css';

export const meta: MetaFunction = () => {
  return [
    { title: 'Ricardo Meneses Morales' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: stylesTransition },
    { rel: 'stylesheet', href: stylesMenu },
  ];
};

export default function Index() {
  return (
    <>
      <Header />
      <Box as='main' position='relative'>
        <Home />
        <Box as='section' height={'300px'}>
          <Heading>Hola</Heading>
        </Box>
      </Box>
    </>
  );
}
