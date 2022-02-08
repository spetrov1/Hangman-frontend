import Button from 'react-bootstrap/Button';
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Welcome = () => {
    return (

    <main className="mx-0">
        <Link to='/game'> <Button as={Col} variant="primary"> Start new game </Button> </Link>
    </main>
        )
};

export default Welcome;