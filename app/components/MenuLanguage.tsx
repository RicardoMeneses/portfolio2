import { Flex, Text } from '@chakra-ui/react';
import { Menu, MenuButton } from '@szhsin/react-menu';

import { FaChevronDown } from 'react-icons/fa';

interface MenuLanguageProps {
  children: React.ReactNode;
  language: string;
  navbar?: boolean;
}

export const MenuLanguage: React.FC<MenuLanguageProps> = ({ children, language, navbar }) => {
  return (
    <Menu
      menuButton={
        <MenuButton>
          <Flex alignItems='center' gap={1} textColor={'white'}>
            <Text color='white' fontSize={'30px'}>
              {language}
            </Text>
            <FaChevronDown style={{ fontSize: '16px' }} />
          </Flex>
        </MenuButton>
      }
      transition
      direction='bottom'
      align='end'
      position='anchor'
      viewScroll='close'
      arrow={true}
    >
      {children}
    </Menu>
  );
};
