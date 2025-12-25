import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../../store/auth-slice.js';
import { useFetch } from '../../hooks/useFetch.js';
import Button from '../../components/button/Button.jsx';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading, fetch } = useFetch();

    const handleLogout = async () => {
        const response = await fetch('/auth/logout', 'get');
        if (response) {
            dispatch(authActions.logout());
            navigate('/');
        }
    };

    return (
        <div className="home">
            <h1>Home</h1>
            <Button loading={isLoading} onClick={handleLogout}>
                Logout
            </Button>
        </div>
    );
};

export default Home;
