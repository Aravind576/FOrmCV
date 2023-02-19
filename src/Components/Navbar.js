import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CVbuilderLOG from '../Images/unnamed.png'
function BasicExamples() {
  const Title = "Aravind";
  return (
    <Navbar expand="lg" className='heightassign colorassign'>
      <div className='paddingAssign marginAssignNavbar'>
        <Navbar.Brand href="#home" className='widthAssign'><img className='imageSizeAssign' src={CVbuilderLOG} /> </Navbar.Brand>
        {/*<Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
        <Navbar id="basic-navbar-nav">
          <Nav className="left-auto">

            <NavDropdown title={Title} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                LOGout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>
    </Navbar>
  );
}

export default BasicExamples;