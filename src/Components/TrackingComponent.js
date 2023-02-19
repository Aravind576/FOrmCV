import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../Images/unnamed.png'
import BasicExample from './ProgressCards';
function ResponsiveAutoExample() {
    return (

        <div className='widthSidebar'>
        <p className='FillName'>Fill Section</p>
            <Container>
                <Row className='rowTrackingBar'>
                    <Col sm={6} className='rightBorderClass'><BasicExample Title="Personal Info" Logo={Logo}/></Col>
                    <Col sm={6}><BasicExample Title="Personal Info" Logo={Logo}/></Col>
                </Row>
                <Row className='rowTrackingBar'>
                    <Col sm={6} className='rightBorderClass'><BasicExample Title="Personal Info" Logo={Logo}/></Col>
                    <Col sm={6}><BasicExample Title="Personal Info" Logo={Logo}/></Col>
                </Row>
                <Row className='rowTrackingBar bottomBorderClass'>
                    <Col sm={6} className='rightBorderClass'><BasicExample Title="Personal Info" Logo={Logo}/></Col>
                </Row>
            </Container>
        </div>

    );
}

export default ResponsiveAutoExample;