import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
    return (
        <Card style={{ width: '7rem' }}>
            <Card.Img variant="top" src={props.Logo} />
            <Card.Body>
                <Card.Title className='sizeAssign'>{props.Title}</Card.Title>


            </Card.Body>
        </Card>
    );
}

export default BasicExample;