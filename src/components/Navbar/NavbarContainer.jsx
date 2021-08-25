
import { connect } from 'react-redux';
import Navbar from './Navbar';

debugger

const mapStateToPtops = (state) => {
  return{
    sidebar: state.sidebarPage.sidebar
  }
}

const NavbarContainer = connect(mapStateToPtops)(Navbar)



export default NavbarContainer;

