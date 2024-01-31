import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
// import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
const Navbar2 = () => {
  const Navigate = new useNavigate();
  const handleChange=()=>{
    Navigate('/About');
  }
  const handleChange1=()=>{
    Navigate('/home');
  }
  const handleChange2=()=>{
    Navigate('/Event');
  }
  const handleChange3=()=>{
    Navigate('/Dash');
  }
  

  return (
    <Navbar>
    <Navbar.Brand >SHELBY</Navbar.Brand>
    <Nav>
      <Nav.Item icon={<HomeIcon />} onClick={handleChange1}>Home</Nav.Item>
      <Nav.Item onClick={handleChange3}>Dashborad</Nav.Item>
      <Nav.Item  onClick={handleChange}>About</Nav.Item>

      <Nav.Item  onClick={handleChange2}>Event</Nav.Item>
      <Nav.Item>Contact Us </Nav.Item>
      
      
        
       
    </Nav>
    <Nav pullRight>
      <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
    </Nav>
  </Navbar>
  )
}

export default Navbar2
