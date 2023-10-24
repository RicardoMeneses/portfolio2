import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
} from '@chakra-ui/react';

type MenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MenuDrawer: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  return (
    <Drawer onClose={onClose} isOpen={isOpen} placement='left' size='md'>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Ricardo Meneses</DrawerHeader>
        <DrawerBody>
          <Text>Inicio</Text>
          <Text>Proyectos</Text>
          <Text>Experiencia</Text>
          <Text>Formación</Text>
          <Text>Skills</Text>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
