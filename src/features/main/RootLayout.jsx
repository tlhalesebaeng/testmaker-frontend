import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch.js';

const RootLayout = () => {
    const [authChecked, setAuthChecked] = useState(false);
    const { fetch } = useFetch();

    useEffect(() => {
        const checkAuth = async () => {
            const response = await fetch('/auth/check', 'get');
            if (response) {
                // TODO: Save the isAuth result on some global state management
            }
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
