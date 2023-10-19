import { Center, Heading } from '@chakra-ui/react';
import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Ricardo Meneses Morales' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <Center>
      <Heading>Hola mundo</Heading>
    </Center>
  );
}
