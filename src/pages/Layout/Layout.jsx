import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Overlay from '../../components/Overlay/Overlay';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addToCarts, clearCartAC } from '../../redux/reducers/cart-reducer';
import { switchModalAC, toggleModalAC } from '../../redux/reducers/modalWindow-reducer';

const Layout = () => {
    const isModalOpen = useSelector(state => state.modal.isModalOpen);
    const isLogged = useSelector((state) => state.user.user);
    const token = useSelector((state) => state.user.token);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            if (token) {
                try {
                    const response = await fetch('http://127.0.0.1:4000/api/cart', {
                        method: 'GET',
                        headers: {
                            'Authorization': token,
                            'Content-Type': 'application/json',
                        },
                    });

                    const result = await response.json();
                    if (result.products.length) {
                        dispatch(switchModalAC('cart'));
                        dispatch(toggleModalAC());
                    }
                    // dispatch(clearCartAC());
                    // result.products.forEach(product => dispatch(addToCarts(product)))
                } catch (err) {
                    console.log(err);
                }
            }
        })();
    }, [isLogged]);

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
