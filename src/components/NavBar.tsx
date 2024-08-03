import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.jpg'
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './Searchlnput';

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding='10px'>
      <Image src={logo} boxSize='60px' />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar