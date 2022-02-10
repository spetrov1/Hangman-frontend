import { Alert } from "react-bootstrap";
import { useLocation } from "react-router-dom";


const ResultDisplay = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const res = queryParams.get('res').toUpperCase();

    return (
        <main> 
            <Alert variant={res === 'WIN' ? "success" : 'info'}>
                Result: {res} 
            </Alert>
        </main>
    );
};

export default ResultDisplay;