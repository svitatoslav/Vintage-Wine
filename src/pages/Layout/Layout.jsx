import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Overlay from '../../components/Overlay/Overlay';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';

const Layout = () => {
    const isModalOpen = useSelector(state => state.modal.isModalOpen);

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            {isModalOpen && createPortal(
                <Overlay />,
                document.body
            )}
        </>
    );
};

export default Layout;
