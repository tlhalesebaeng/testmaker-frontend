import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
        <main className="max-width">
            <Outlet />
        </main>
    );
};

export default RootLayout;
