import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch.js';
import { authActions } from '../../store/auth-slice.js';

const RootLayout = () => {
    const [authChecked, setAuthChecked] = useState(false);
    const { fetch } = useFetch();
    const dispatch = useDispatch();

    useEffect(() => {
        const checkAuth = async () => {
            const response = await fetch('/auth/check', 'get');
            if (response && response.data) dispatch(authActions.login(response.data.user));
            setAuthChecked(true);
        };
        checkAuth();
    }, []);

    if (!authChecked) return <p>Loading...</p>;

    return (
        <main className="max-width">
            <Outlet />
        </main>
    );
};

export default RootLayout;
