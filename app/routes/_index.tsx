import type { MetaFunction } from '@remix-run/node';
import Home from '~/components/Home';

export const meta: MetaFunction = () => {
  return [
    { title: 'Ricardo Meneses Morales' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <>
      <Home />
    </>
  );
}
